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
            renderFlag: false
        };
    }

    addTask(flag) {
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
                date1: null,
                date2: null,
                timeSpendFrom: new Date(),
                timeSpendTo: null,
                desc: taskDesc
            });
            this.state.renderFlag = false;
            this.forceUpdate()
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
                                <div className="task-add-button" onClick={this.addTask.bind(this, this.state.renderFlag)}>
                                    Добавить задачу
                                </div>
                                {this.state.renderFlag === true &&
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
                                {this.state.renderFlag === false &&
                                    <div className="task-info" id="task_info"></div>
                                }
                            </div>
                            <TaskBoardComp
                                tasks={this.state.taskList}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default MainFormComp;
