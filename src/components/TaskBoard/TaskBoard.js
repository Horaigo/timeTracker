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
                <ul className="task-board" id="task_board">
                    <TaskComp
                      info={{
                          name: 'test',
                          currentTime: new Date(),
                          currentDate: new Date(),
                          date1: new Date(2019, 11, 31),
                          date2: new Date(2020, 0, 1),
                          timeSpendFrom: new Date(2019, 11, 1, 10, 15),
                          timeSpendTo: new Date(2019, 11, 1, 9, 40),
                          desc: 'ЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоуЙоу'
                      }}/>
                </ul>
            </div>
        );
    }
}
export default TaskBoardComp;