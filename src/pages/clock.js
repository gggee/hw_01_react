import React, { useState, useEffect } from 'react';
import './css/clock_stl.css';

function Info_Clock(props) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };

    const hours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());

    return (
        <div className="clock">
            <h1 className='clock_title'>{props.title}</h1>
            <p className='p_clock'>{`${hours}:${minutes}:${seconds}`}</p>
        </div>
    );
}

const Clock = () => {
    return (
        <Info_Clock
            title='Текущее время'
        />
    );

}

export default Clock;
