import React from 'react';
import { deleteTask } from '../../gateway/events';
import './event.scss';

const Event = ({ title, time, id, handleOnDelete, refreshPage}) => {
    const handleDelete = (id) => {
        deleteTask(id);
        handleOnDelete();
        refreshPage();
    };

    return (
        <div className="event">
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
            <button className='delete-event-btn' onClick={() => handleDelete(id)}>delete</button>
        </div >
    )
}

export default Event;