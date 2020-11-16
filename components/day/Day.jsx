import React from 'react';
import Hour from '../hour/Hour';
import RedLine from '../redline/RedLine';
import PropTypes from 'prop-types';

import './day.scss';

const Day = ({ dataDay, dayEvents, handleOnDelete, refreshPage, weekStartDate}) => {
    const hours = Array(24).fill().map((val, index) => index < 10 ? `0${index}`: `${index}`);

    const currentDay = weekStartDate.getDate();

    return (
        <div className="calendar__day" data-day={dataDay}>
            {currentDay === dataDay ? <RedLine /> : null}
            {hours.map(hour => {
                //getting all events from the day we will render

                const hourEvents = dayEvents?.filter(event =>
                    event?.startTime.slice(0, 2) === hour)

                return (
                    <Hour
                        key={dataDay + hour}
                        dataHour={hour}
                        hourEvents={hourEvents}
                        handleOnDelete={handleOnDelete}
                        refreshPage={refreshPage}
                    />
                );
            })}
        </div>
    );
};

export default Day;

Day.propTypes = {
    dataDay:PropTypes.number,
    dayEvents:PropTypes.array,
    handleOnDelete:PropTypes.func, 
    refreshPage:PropTypes.func,
    weekStartDate:PropTypes.object,
}