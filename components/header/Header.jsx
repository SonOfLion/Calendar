import React, { useState, useEffect } from 'react';
import { months, getWeekStartDate, weekDates } from '../../utils/dateUtils.js';
import Modal from '../modal/Modal';
import './header.scss';

const Header = ({ goNext, goPrev, toDay, weekDates, showForm  }) => {
    const firstDayOfWeek = months[weekDates[0].getMonth()];
    const lastDayOfWeek = months[weekDates[6].getMonth()];

    return (
        <header className="header">
            <button className="button create-event-btn" onClick={showForm}>
                <i className="fas fa-plus create-event-btn__icon"></i>
                Create
            </button>

            <div className="navigation">

                <button className="navigation__today-btn button"
                    onClick={toDay}
                >
                    Today
                </button>

                <button className="icon-button navigation__nav-icon">
                    <i className="fas fa-chevron-left"
                        onClick={goPrev}
                    >
                    </i>
                </button>

                <button className="icon-button navigation__nav-icon">
                    <i className="fas fa-chevron-right"
                        onClick={goNext}
                    >
                    </i>
                        
                </button>

                    <span className="navigation__displayed-month">
                        {firstDayOfWeek === lastDayOfWeek
                        ? firstDayOfWeek
                        : `${firstDayOfWeek} 
                        - ${lastDayOfWeek}`}
                    </span>
            </div>
        </header>
    )
}

export default Header;