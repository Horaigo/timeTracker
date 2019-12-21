import React from 'react';
import '../../App.css';
import './TaskBoard.css';
import TaskComp from '../Task/Task.js';

class TaskBoardComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    
    render() {
        return(
            <div className="task-board-container">
                <ul className="task-board">
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                    <TaskComp/>
                </ul>
            </div>
        );
    }
}
export default TaskBoardComp;