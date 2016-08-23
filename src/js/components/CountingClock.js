
import React from 'react';

import Timing from '../utils/Timing';

import Ticker from './Ticker';

const CountingClock = React.createClass({
    getInitialState() {
        const timerObject = Timing.getTimerObject(this.props.timestamp);
        return {
            start: this.props.timestamp,
            ...timerObject
        };
    },
    componentWillReceiveProps(nextProps) {
        const timerObject = Timing.getTimerObject(nextProps.timestamp);
        this.setState({
            start: nextProps.timestamp,
            ...timerObject
        });
    },
    componentDidMount() {
        const secondsToMinute = 60 - this.props.timer.minutes.value;
        window.setTimeout(() => {
            console.log("secs", secondsToMinute);
        }, secondsToMinute * 1000);
    },
    render() {
        let classList = ['counting-clock'];
        if (Array.isArray(this.props.classNames)) { classList = [...classList, ...this.props.classNames]; }
        const { days, hours, minutes, seconds } = Timing.getTimerObject(this.props.timestamp);
        const timerObject = Timing.getTimerObject(this.props.timestamp);

        const types = [
                'days',
                'hours',
                'minutes',
                'seconds'
                ];

        return (
            <div className={classList.join(' ')}>
                {types.map((type, index) => {
                    const shouldTick = (type === 'seconds');
                    return (<Ticker
                            key={index}
                            label={timerObject[type].label}
                            value={timerObject[type].value}
                            tick={shouldTick} />
                            );
                })}
            </div>
        );
    }
});

export default CountingClock;