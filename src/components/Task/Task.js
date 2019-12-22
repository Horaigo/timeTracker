import React from 'react';
import '../../App.css';
import './Task.css';

class TaskComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: props.name,
            editId: null,
            deleteId: null
        };
    }

    checkDatetimeItem(item) {
        if(item < 10) {
            item = '0' + item;
        }
        return item;
    }

    getTimeFromMilsec(seconds) {
        var 
            minutes = seconds/1000/60,
            hours = '00',
            hoursCount = 0;

        while(minutes > 60) {
            minutes = minutes - 60;
            hoursCount++;
        }
        if (hoursCount > 0) {
            if(hoursCount < 10) {
                hours = '0' + hoursCount;
            } else {
                hours = hoursCount;
            }
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return (hours+':'+minutes)
    }

    checkTime(time1, time2) {
        if (!time1) {
            time1='';
        }
        if (!time2) {
            time2='';
        }
        var result = '';
        if(time1 !== '' && time2 !== '') {
            result = this.getTimeFromMilsec(this.props.info.timeSpendTo - this.props.info.timeSpendFrom);
        }
        return result;
    }

    checkDate(date1, date2) {
        if (!date1) {
            date1='';
        }
        if (!date2) {
            date2='';
        }
        var result = '';
        if (date1 !== '' || date2 !== '') {
            if (date1 !== '') {
                date1 = this.checkDatetimeItem(this.props.info.date1.getDate()) + '.' 
                + this.checkDatetimeItem(this.props.info.date1.getMonth()+1) + '.'
                + this.checkDatetimeItem(this.props.info.date1.getFullYear());
            }
            if (date2 !== '') {
                date2 = this.checkDatetimeItem(this.props.info.date2.getDate()) + '.' 
                + this.checkDatetimeItem(this.props.info.date2.getMonth()+1) + '.'
                + this.checkDatetimeItem(this.props.info.date2.getFullYear());
            }
            result = date1 + ' - ' + date2;
        }
        return result;
    }

    setEditId(key) {
        this.props.updateEditId(key);
    }

    setDeleteId(key) {
        this.props.updateDeleteId(key);
    }
    
    render() {
        return(
            <div className="task">
                <div className="task-title">
                    <div id={'name'+this.props.info.key}>{this.props.info.name}</div>
                    <div className="task-actions">
                        <div className="task-edit" onClick={this.setEditId.bind(this, this.props.info.key)}>
                            Изменить
                        </div>
                        <div className="task-delete" onClick={this.setDeleteId.bind(this, this.props.info.key)}>
                            Удалить
                        </div>
                    </div>
                </div>
                <div className="task-datetime">
                    Дата и время по задаче:
                </div>
                <div className="task-dates">
                    <div className="task-date-current">
                        <div className="task-datetime-title">
                            Дата создания: 
                        </div>
                        <div className="task-datetime-content" id={'curDate'+this.props.info.key}>
                            {this.checkDatetimeItem(this.props.info.currentDate.getDate())}.
                            {this.checkDatetimeItem(this.props.info.currentDate.getMonth()+1)}.
                            {this.checkDatetimeItem(this.props.info.currentDate.getFullYear())}
                        </div>
                    </div>
                </div>
                <div className="task-time">
                    <div className="task-time-current">
                        <div className="task-datetime-title">
                            Время создания: 
                        </div>
                        <div className="task-datetime-content" id={'curTime'+this.props.info.key}>
                            {this.checkDatetimeItem(this.props.info.currentTime.getHours())}:
                            {this.checkDatetimeItem(this.props.info.currentTime.getMinutes())}
                        </div>
                    </div>
                    <div className="task-time-period">
                        <div className="task-datetime-title">
                            Затраченное время: 
                        </div>
                        <div className="task-datetime-content" id={'time'+this.props.info.key}>
                            {this.props.info.timeSpend}
                        </div>
                    </div>
                </div>
                <div className="task-desc">
                    <div className="desc-title">
                        Описание задачи:
                    </div>
                    <div className="desc-info" id={'desc'+this.props.info.key}>
                        {this.props.info.desc}
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskComp;