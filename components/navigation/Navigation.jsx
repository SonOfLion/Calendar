import React from 'react';
import RedLine from '../redline/RedLine';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates, weekStartDate }) => {

    const currentDay = weekStartDate.getDate();

    const stylesCurrentDay =
    {
        backgroundColor: 'blue',
        color: 'white',
        width: '50px',
        alignItems: ' center',
        justifyContent: 'center',
        display: 'flex',
        height: '50px',
        borderRadius: '30px'
    };

    return (
        <header className="calendar__header">
            {weekDates.map(dayDate =>
                <div className="calendar__day-label day-label" key={dayDate}>
                    <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
                    <span className="day-label__day-number" style={dayDate.getDate() === currentDay ? stylesCurrentDay : null}>{dayDate.getDate()}</span>
                </div>
            )}
        </header>
    )
    
}

export default Navigation;
