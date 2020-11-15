import React, { useState } from 'react';
import { createNewTask } from '../../gateway/events';
import './modal.scss';

const Modal = ( {isOpen, hideForm, refreshEvent} ) => {
    const [task, setTask] = useState({
        title:'',
        date:'',
        startTime: '',
        endTime:'',
        description:''
    });

    const clearInputs = () => setTask({
        title:'',
        date:'',
        startTime:'',
        endTime:'',
        description:''
    });

    const handleSubmit = () => {
        event.preventDefault();
        createNewTask(task);
        refreshEvent(task);
        clearInputs();
        hideForm();
    };
    
    if(!isOpen){
        return null;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
            setTask({
                ...task,
                [name]: value,
            });
    };

    return (
        <div className="modal overlay">
            <div className="modal__content">
                <div className="create-event">
                    <button className="create-event__close-btn"
                        onClick={hideForm}
                    >+</button>

                    <form className="event-form" onSubmit={handleSubmit}>
                        <input type="text"
                            name="title"
                            placeholder="Title"
                            className="event-form__field"
                            onChange={handleChange}
                            required minLength="3" maxLength="30"
                        />

                        <div className="event-form__time">
                            <input type="date"
                                name="date"
                                className="event-form__field"
                                onChange={handleChange}
                                required minLength="2" maxLength="10"
                            />

                            <input type="time"
                                name="startTime"
                                className="event-form__field"
                                onChange={handleChange}
                                required minLength="2" maxLength="10"
                            />

                            <span>-</span>
                            <input type="time"
                                name="endTime"
                                className="event-form__field"
                                onChange={handleChange}
                                required minLength="2" maxLength="10"
                            />

                        </div>
                        <textarea name="description"
                            placeholder="description"
                            className="event-form__field"
                            onChange={handleChange}
                            required minLength="3" maxLength="200"
                        >
                            
                        </textarea>

                        <button type="submit" className="event-form__submit-btn">Create</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;