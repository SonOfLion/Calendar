import React from 'react';
import Day from '../day/Day';
import moment from 'moment';

import './week.scss';

const Week = ({ weekDates, events, handleOnDelete, refreshPage, weekStartDate }) => {
    return (
        <div className="calendar__week">
            {weekDates.map(dayStart => {
                
                const dayEnd = moment(new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24)).format("YYYY-MM-DD");
                //getting all events from the day we will render
                const dayEvents = events.filter(event => event.date === moment(dayStart).format("YYYY-MM-DD"));
                return (
                    <Day
                        weekStartDate={weekStartDate}
                        key={dayStart.getDate()}
                        dataDay={dayStart.getDate()}
                        dayEvents={dayEvents}
                        handleOnDelete={handleOnDelete}
                        refreshPage={refreshPage}
                    />
                    
                );
            })};
        </div>
    );
};

export default Week;
