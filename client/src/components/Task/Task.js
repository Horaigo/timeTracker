import React from 'react';
import '../../App.css';
import './Task.css';

class TaskComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    
    render() {
        return(
            <div className="task">
                <div className="task-title">

                </div>
                <div className="task-dates">

                </div>
                <div className="task-time">

                </div>
                <div className="task-desc">

                </div>
            </div>
        );
    }
}
export default TaskComp;