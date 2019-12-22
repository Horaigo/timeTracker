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
                name: null,
                curTime: null,
                times: null,
                curDate: null,
                dates: null,
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
                    name: (document.getElementById('name'+value)).textContent,
                    desc: (document.getElementById('desc'+value)).textContent
                }
            });
        } else {
            this.setState({
                editId: value,
                editData: {
                    name: (document.getElementById('name'+value)).textContent,
                    desc: (document.getElementById('desc'+value)).textContent,
                    time: (document.getElementById('time'+value)).textContent
                }
            });
        }
    }

    updateDeleteId = (value) => {
        var tmp = [];
        for (var key in this.state.taskList) {
            if(this.state.taskList[key].key !== value) {
                tmp.push(this.state.taskList[key])
            }
        }
        this.state.taskList = tmp;
        this.forceUpdate();
    }

    addTask() {
        this.setState({renderFlag: true})
    }

    createTask(taskList) {
        var 
            taskName = document.getElementById('task_name'),
            taskDesc = document.getElementById('task_desc');
        taskName = taskName.value;
        taskDesc = taskDesc.value;
        if (taskName !== '' && taskDesc !== '') {
            taskList.push({
                key: taskList.length,
                name: taskName,
                currentTime: new Date(),
                currentDate: new Date(),
                timeSpend: null,
                desc: taskDesc
            });
            this.setState({renderFlag: false});
        }
    }

    editTask() {
        this.setState({renderFlag: false, renderEditFlag: true});
    }

    changeTask(taskList) {
        for (var key in taskList) {
            if(taskList[key].key === this.state.editId) {
                taskList[key].name = (document.getElementById('task_name')).value;
                taskList[key].desc = (document.getElementById('task_desc')).value;
                taskList[key].timeSpend = (document.getElementById('task_time')).value;
                this.setState({editId: null, editData: {}})
                this.forceUpdate();
                break;
            }
        }
    }

    render() {
        return (
            <div className="page">
                <div className="form">
                    <div className="form-title">Главное меню</div>
                    <div className="form-page">
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
                                                <textarea id="task_name" className="task-info-desc task-info-desc1"></textarea>
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
                                                <textarea id="task_name" className="task-info-desc task-info-desc1" value={this.state.editData.name}></textarea>
                                                <div className="task-info-datetime-string">
                                                    <div className="task-info-subtitle">Затраченное время:</div>
                                                    <input type="time" id="task_time" min="00:00" max="23:59" className="task-info-datetime" value={this.state.editData.time}></input>
                                                </div>
                                                <div className="task-info-subtitle">Описание задачи:</div>
                                                <textarea id="task_desc" className="task-info-desc task-info-desc2" value={this.state.editData.desc} required></textarea>
                                            </div>
                                            <div className="task-info-content-button" onClick={this.changeTask.bind(this, this.state.taskList)}>Изменить</div>
                                        </div>  
                                    </div>
                                }
                            </div>
                            <TaskBoardComp
                                tasks={this.state.taskList}
                                updateEditId={this.updateEditId}
                                updateDeleteId={this.updateDeleteId}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default MainFormComp;
