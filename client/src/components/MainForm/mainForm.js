import React from 'react';
import '../../App.css';
import './mainForm.css';
import TaskBoardComp from '../TaskBoard/TaskBoard.js';

class MainFormComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    addTask() {
        var taskContainer = document.getElementById('task_info');

    }

    render() {
        return (
            <div className="page">
                <div className="form">
                    <div className="form-title">Главное меню</div>
                    <div className="form-page">
                        <div className="workzone">
                            <div className="sidemenu">
                                <div className="task-add-button" onClick={this.addTask()}>
                                    Добавить задачу
                                </div>
                                <div className="task-info" id="task_info">
                                    <div className="task-info-title">Информация о задаче</div>
                                    <div className="task-info-title">Редактирование задачи</div>
                                    <div className="task-info-content">
                                        <div className="task-info-content-top">
                                            <div className="task-info-subtitle">
                                                Описание задачи:
                                            </div>
                                            <input type="text" className="task-info-desc">
                                            </input>
                                        </div>
                                        <div className="task-info-content-button">
                                            Создать
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <TaskBoardComp/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default MainFormComp;
