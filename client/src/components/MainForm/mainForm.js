import React from 'react';
import '../../App.css';
import './mainForm.css';
import TaskBoardComp from '../TaskBoard/TaskBoard.js';

class MainFormComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <div className="page">
                <div className="form">
                    <div className="form-title">Главное меню</div>
                    <div className="form-page">
                        <div className="workzone">
                            <div className="sidemenu">
                                <div className="task-add-button">
                                    Добавить задачу
                                </div>
                                <div className="task-info">
                                    <div className="task-info-title">Доп. информация</div>
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
