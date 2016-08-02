
import React from 'react';

import PersonelSignal from './PersonelSignal';

const PersonelItem = React.createClass({
    render() {
        let classList = ['personel__name'];
        if (this.props.isPresent) {
            classList.push('present');
        }
        const isSelectedUser = this.props.index === this.props.selectedUser;
        if (isSelectedUser) { classList.push('isSelectedUser'); }
        return (
                <div className="wrapper">
                    <div className="personel__item">
                        <PersonelSignal type="in" />
                        <div
                            className={classList.join(' ')}
                            onClick={this.props.handleClick.bind(null, this.props.index)}>
                            {this.props.name}
                        </div>
                        <PersonelSignal type="out" />
                    </div>
                </div>
            );
    }
});

export default PersonelItem;