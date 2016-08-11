
import React from 'react';

const Ticker = React.createClass({
    nillFill(val) {
        return val > 9 ? val : ('0' + val);
    },
    render() {
        return (
            <div className="ticker">
                <div className="ticker__label">{this.props.label}</div>
                <div className="ticker__value" ref="tickerVal">{this.nillFill(this.props.value)}</div>
            </div>
            );
    }
});

export default Ticker;