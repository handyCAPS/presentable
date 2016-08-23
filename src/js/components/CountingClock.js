
import React from 'react';

import Timing from '../utils/Timing';

import Ticker from './Ticker';

const CountingClock = React.createClass({
    timeout: null,
    interval: null,
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
        this.setTimer(nextProps.timestamp);
    },
    componentDidMount() {
        this.setTimer(this.props.timestamp);
    },
    componentWillUnmount() {
        this.clearTimers();
    },
    clearTimers() {
        if (this.interval !== null) {
            window.clearInterval(this.interval);
        }
        if (this.timeout !== null) {
            window.clearTimeout(this.timeout);
        }
    },
    setTimer(timestamp) {
        this.clearTimers();
        const timerObject = Timing.getTimerObject(timestamp);
        const secondsToMinute = 60 - parseInt(timerObject.seconds.value);
        this.timeout = window.setTimeout(() => {
            this.reset();
            this.interval = window.setInterval(this.reset, 60000)
        }, secondsToMinute * 1000);
    },
    reset() {
        const timerObject = Timing.getTimerObject(this.state.start);
        this.setState({
            ...timerObject
        });
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
                            label={this.state[type].label}
                            value={this.state[type].value}
                            tick={shouldTick} />
                            );
                })}
            </div>
        );
    }
});

export default CountingClock;