import React from 'react';
import '../../App.css';
import './mainForm.css';
import TaskBoardComp from '../TaskBoard/TaskBoard.js';

class MainFormComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            taskList: [],
            renderFlag: false,
            renderEditFlag: false,
            editId: null,
            editData: {
                title: null,
                time: null,
                creation_time: null,
                creation_date: null,
                desc: null
            },
            deleteId: null
        };
    }

    updateEditId = (value) => {
        if ((document.getElementById('time'+value)).textContent === '') {
            this.setState({
                editId: value,
                editData: {
                    title: (document.getElementById('title'+value)).textContent,
                    desc: (document.getElementById('desc'+value)).textContent
                }
            });
        } else {
            this.setState({
                editId: value,
                editData: {
                    title: (document.getElementById('title'+value)).textContent,
                    desc: (document.getElementById('desc'+value)).textContent,
                    time: (document.getElementById('time'+value)).textContent
                }
            });
        }
    }

    async updateDeleteId(value) {
        let response = await fetch('http://127.0.0.1:5000/timeUnits', {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              unit_id: value
          })
        });
        let result = await response.json();
        if (result.result == "Successfuly deleted") {
            var tmp = [];
            for (var key in this.state.taskList) {
                if(this.state.taskList[key].key !== value) {
                    tmp.push(this.state.taskList[key])
                }
            }
            this.state.taskList = tmp;
            this.forceUpdate();
        }
    }

    addTask() {
        this.setState({renderFlag: true})
    }

    async createTask(taskList) {
        var 
            taskName = document.getElementById('task_title'),
            taskDesc = document.getElementById('task_desc');
        taskName = taskName.value;
        taskDesc = taskDesc.value;
        if (taskName !== '' && taskDesc !== '') {
            var singleTask = {
                user_id: document.cookie.replace('userOid=', ''),
                title: taskName,
                creation_time: new Date(),
                creation_date: new Date(),
                time: '00:00',
                desc: taskDesc
            }
            let response = await fetch('http://127.0.0.1:5000/timeUnits', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(singleTask)
            });
            let result = await response.json();
            console.log(result)
            if (result) {
                singleTask.key = result.result;
                taskList.push(singleTask);
                this.setState({renderFlag: false});
            }
        }
    }

    editTask() {
        this.setState({renderFlag: false, renderEditFlag: true});
    }

    async changeTask(taskList) {
        let response = await fetch('http://127.0.0.1:5000/timeUnits', {
          method: 'PATCH',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              unit_id: this.state.editId,
              title: (document.getElementById('task_title')).value,
              desc: (document.getElementById('task_desc')).value,
              time: (document.getElementById('task_time')).value
          })
        });
        let result = await response.json();
        if(result.result != 'Wrong arguments') {
            for (var key in taskList) {
                if(taskList[key].key === this.state.editId) {
                    taskList[key].title = (document.getElementById('task_title')).value;
                    taskList[key].desc = (document.getElementById('task_desc')).value;
                    taskList[key].time = (document.getElementById('task_time')).value;
                    this.setState({editId: null, editData: {}})
                    this.forceUpdate();
                    break;
                }
            }
        }
    }

    async getData() {
        let response = await fetch('http://127.0.0.1:5000/timeUnits?user_id='+document.cookie.replace('userOid=', ''), {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        });
        let result = await response.json();
        if (result && result.length != 0 && result.length != this.state.taskList.length) {
            for(var key in result) {
                let tmpObject = {
                    key: result[key]._id,
                    _id: result[key]._id,
                    title: result[key].title,
                    creation_time: result[key].creation_time,
                    creation_date: result[key].creation_date,
                    time: result[key].time,
                    desc: result[key].desc
                }
                var tmpStr = tmpObject.time.split(':');
                if (tmpStr[0].length < 2) {
                    tmpStr[0] = '0' + tmpStr[0];
                }
                if (tmpStr[1].length < 2) {
                    tmpStr[1] = '0' + tmpStr[1];
                }
                tmpObject.time = [tmpStr[0], tmpStr[1]].join(':');
                this.state.taskList.push(tmpObject)
            }
            console.log(result)
            this.forceUpdate()
        }
    }
    render() {
        this.getData()
        return (
            <div className="page page-page">
                <div className="form page-form">
                    <div className="form-title page-form-title">Главное меню</div>
                    <div className="form-page page-form-page">
                        <div className="workzone">
                            <div className="sidemenu">
                                <div className="task-add-button" onClick={this.addTask.bind(this)}>
                                    Добавить задачу
                                </div>
                                {(this.state.renderFlag === true && this.state.editId === null) &&
                                    <div className="task-info" id="task_info">
                                        <div className="task-info-title">Информация о задаче</div>
                                        <div className="task-info-content">
                                            <div className="task-info-content-top">
                                                <div className="task-info-subtitle">Название:</div>
                                                <textarea id="task_title" className="task-info-desc task-info-desc1"></textarea>
                                                <div className="task-info-subtitle">Описание задачи:</div>
                                                <textarea id="task_desc" className="task-info-desc"></textarea>
                                            </div>
                                            <div className="task-info-content-button" onClick={this.createTask.bind(this, this.state.taskList)}>Создать</div>
                                        </div>  
                                    </div>
                                }
                                {(this.state.renderFlag === false && this.state.editId === null)&&
                                    <div className="task-info" id="task_info"></div>
                                }
                                {this.state.editId !== null &&
                                    <div className="task-info" id="task_info">
                                        <div className="task-info-title">Информация о задаче</div>
                                        <div className="task-info-content">
                                            <div className="task-info-content-top">
                                                <div className="task-info-subtitle">Название:</div>
                                                <textarea id="task_title" className="task-info-desc task-info-desc1" defaultValue={this.state.editData.title}></textarea>
                                                <div className="task-info-datetime-string">
                                                    <div className="task-info-subtitle">Затраченное время:</div>
                                                    <input type="time" id="task_time" min="00:00" max="23:59" className="task-info-datetime" defaultValue={this.state.editData.time}></input>
                                                </div>
                                                <div className="task-info-subtitle">Описание задачи:</div>
                                                <textarea id="task_desc" className="task-info-desc task-info-desc2" defaultValue={this.state.editData.desc} required></textarea>
                                            </div>
                                            <div className="task-info-content-button" onClick={this.changeTask.bind(this, this.state.taskList)}>Изменить</div>
                                        </div>  
                                    </div>
                                }
                            </div>
                            <TaskBoardComp
                                tasks={this.state.taskList}
                                updateEditId={this.updateEditId}
                                updateDeleteId={this.updateDeleteId.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default MainFormComp;
