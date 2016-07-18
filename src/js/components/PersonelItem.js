
import React from 'react';

const PersonelItem = React.createClass({
    render() {
        let classList = ['personel--item'];
        if (this.props.isPresent) {
            classList.push('present');
        }
        return (
                <li className={classList.join(' ')} onClick={this.props.handleChangePresence.bind(null, this.props.index, !this.props.isPresent)}>{this.props.name}</li>
            );
    }
});

export default PersonelItem;