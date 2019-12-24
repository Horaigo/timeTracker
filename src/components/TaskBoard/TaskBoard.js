import React from 'react';
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
                                title: task.title,
                                creation_time: new Date(task.creation_time),
                                creation_date: new Date(task.creation_date),
                                time: task.time,
                                desc: task.desc
                            }}/>
                    )}
                </ul>
            </div>
        );
    }
}
export default TaskBoardComp;