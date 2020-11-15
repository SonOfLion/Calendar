import React, { useEffect, useState } from 'react';
import '../redline/redline.scss';

const getDistance = () => {
    const top = new Date().getHours() * 60 + new Date().getMinutes();

    return `${top}px`;
};

const RedLine = ( ) => {
    const [time, setTime] = useState(getDistance());

    const style = {
        top: time,
    };
    
    useEffect(()=>{
        setInterval(()=>{
            setTime(time)
        },60000)
    }); 
    
    useEffect(() => {
        clearInterval(() => {
            setTime(time)
        })
    });

    return  (<div style={style} className="red-line"></div>)
};

export default RedLine;