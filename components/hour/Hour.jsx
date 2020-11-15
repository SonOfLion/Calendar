import React from 'react';
import Event from '../event/Event';

const Hour = ({ dataHour, hourEvents, handleOnDelete, refreshPage }) => {

    return (
        <div className="calendar__time-slot" data-time={dataHour + 1}>
            {/* if no events in the current hour nothing will render here */}
            {hourEvents.map(({ id, title, startTime, endTime}) => {

                return (
                        
                        <Event
                            id={id}
                            key={id}
                            time={`${startTime} - ${endTime}`}
                            title={title}
                            handleOnDelete={handleOnDelete}
                            refreshPage={refreshPage}
                        />
                        )
                    })}
            </div>
    );
};

export default Hour;