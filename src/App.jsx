import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Calendar from '../components/calendar/Calendar';
import Modal from '../components/modal/Modal';
import { getTask } from '../gateway/events';

import { getWeekStartDate, generateWeekRange, addDays, currentDate } from '../utils/dateUtils';

import './common.scss';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [weekStartDate, setWeekStartDate] = useState(new Date());
    
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    const [event, setEvents] = useState([]);

    useEffect(() => {
        getTask().then(responce=>{
            setEvents(responce)
        })
    },[]);

    useEffect(() => {
        getTask().then(responce=>{
            setEvents(responce)
        })
    },[event.length]);

    const refreshEvent = (task) => {
        setEvents([...event,task])
    };

    const handleOnDelete = () => {
        getTask().then(responce=>{
            setEvents(responce)
        })
    };

    const refreshPage = () => {
        getTask().then(responce => {
            setEvents(responce)
        })
    };

    const goNext = () => {
        setWeekStartDate(addDays(weekStartDate, + 7));
    };

    const goPrev = () => {
        setWeekStartDate(addDays(weekStartDate, - 7));
    };
    
    const toDay = () => {
        setWeekStartDate(currentDate());
    };

    const showForm = () => {
        setIsOpen(true)
    };

    const hideForm = () => {
        setIsOpen(false)
    };

    return (
        <>
            <Header 
                showForm={showForm}
                hideForm={hideForm}
                weekStartDate={weekStartDate}
                weekDates={weekDates}
                goNext={goNext}
                goPrev={goPrev}
                toDay={toDay}
            />
            
            <Modal
                isOpen={isOpen}
                hideForm={hideForm}
                refreshEvent={refreshEvent}
            />

            <Calendar 
                weekDates={weekDates} 
                weekStartDate={weekStartDate}
                events={event}
                handleOnDelete={handleOnDelete}
                refreshPage={refreshPage}
            />
        </>
    );
};

export default App;