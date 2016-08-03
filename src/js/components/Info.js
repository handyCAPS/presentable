
import React from 'react';

import InfoText from './InfoText';
import NameSlide from './NameSlide';

const Info = React.createClass({
    getNiceTime(timestamp) {
        const time = new Date(timestamp);
        let mins = time.getMinutes();
        if (mins < 10) { mins = '0' + mins; }
        const timeString = time.toLocaleDateString() + " om " + time.getHours() + ':' + mins;
        return timeString;
    },
    handleInOutClick() {
        this.props.changePresence(this.props.selectedUser.index, !this.props.personel[this.props.selectedUser.index].In);
    },
    render() {
        const User = this.props.personel[this.props.selectedUser.index];

        const presentText = ['Nee', 'Ja'][User.In * 1];
        const buttonText = 'Sign ' + (User.In ? 'Out' : 'In');
        const buttonClass = User.In ? 'In' : 'Out';
        const lastInTime = User.In ? 'Nu' : this.getNiceTime(User.LastIn);
        const lastOutTime = !User.In ? 'Nu' : this.getNiceTime(User.LastOut);

        let classNamesName = [];
        if (User.In) { classNamesName.push('present'); }

        let classNamesWrap = ['info__name-slider'];

        const classNames = {
            wrap: classNamesWrap,
            name: classNamesName
        };

        return (
            <div className="info">
                <h2 className="info__header">{User.Name}</h2>
                <InfoText label="Aanwezig" text={presentText} />
                <InfoText label="Laatst aanwezig" text={lastInTime} />
                <InfoText label="Laatst afwezig" text={lastOutTime} />
                <NameSlide
                    index={this.props.selectedUser}
                    name="Change"
                    classNames={classNames}
                    handleClick={this.handleInOutClick}/>
            </div>
            );
    }
});

export default Info;