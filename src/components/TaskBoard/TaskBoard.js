import React from 'react';
import '../../App.css';
import './TaskBoard.css';
import TaskComp from '../Task/Task.js';

class TaskBoardComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            editId: null,
            deleteId: null
        }
    }

    updateEditId = (value) => {
        this.setState({editId: value})
    }

    updateDeleteId = (value) => {
        this.setState({deleteId: value})
    }
    
    render() {
        return(
            <div className="task-board-container">
                <ul className="task-board" id="task_board">
                    {this.props.tasks.map((task) =>
                        <TaskComp
                            updateEditId = {this.props.updateEditId}
                            updateDeleteId = {this.props.updateDeleteId}
                            key={task.key}
                            info={{
                                key: task.key,
                                name: task.name,
                                currentTime: task.currentTime,
                                currentDate: task.currentDate,
                                timeSpend: task.timeSpend,
                                desc: task.desc
                            }}/>
                    )}
                </ul>
            </div>
        );
    }
}
export default TaskBoardComp;