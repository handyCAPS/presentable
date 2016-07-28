
import React from 'react';

import PersonelSignal from './PersonelSignal';

const PersonelItem = React.createClass({
    render() {
        let classList = ['personel--item'];
        if (this.props.isPresent) {
            classList.push('present');
        }
        return (
                <div className="personel-wrapper">
                    <PersonelSignal type="in" />
                    <div
                        className={classList.join(' ')}
                        onClick={this.props.handleChangePresence.bind(null, this.props.index, !this.props.isPresent)}>
                        {this.props.name}
                    </div>
                    <PersonelSignal type="out" />
                </div>
            );
    }
});

export default PersonelItem;