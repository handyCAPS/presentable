
import React from 'react';

const Ticker = React.createClass({
    interval: null,
    getInitialState() {
        return {
            tick: this.props.value
        };
    },
    componentDidMount() {
        this.setTicker();
    },
    componentWillUnmount() {
        if (this.interval !== null) {
                window.clearInterval(this.interval);
            }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            tick: nextProps.value
        });
        this.setTicker();
    },
    nillFill(val) {
        return val > 9 ? val : ('0' + val);
    },
    tickOver() {
        const newTick = this.state.tick + 1;
        this.setState({ tick: newTick });
    },
    setTicker() {
        if (this.props.tick) {
            if (this.interval !== null) {
                window.clearInterval(this.interval);
            }
            this.interval = window.setInterval(this.tickOver, 1000);
        }
    },
    render() {
        return (
            <div className="ticker">
                <div className="ticker__label">{this.props.label}</div>
                <div className="ticker__value" ref="tickerVal">{this.nillFill(this.state.tick)}</div>
            </div>
            );
    }
});

export default Ticker;