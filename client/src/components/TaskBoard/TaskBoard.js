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
        console.log(this.props)
        return(
            <div className="task-board-container">
                <ul className="task-board" id="task_board">
                    {this.props.tasks.map((task) =>
                        <TaskComp
                            key={task.key}
                            info={{
                                name: task.name,
                                currentTime: task.currentTime,
                                currentDate: task.currentDate,
                                date1: task.date1,
                                date2: task.date2,
                                timeSpendFrom: task.timeSpendFrom,
                                timeSpendTo: task.timeSpendTo,
                                desc: task.desc
                            }}/>
                    )}
                </ul>
            </div>
        );
    }
}
export default TaskBoardComp;