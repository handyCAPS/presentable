
import React from 'react';

import InfoText from './InfoText';

const Info = React.createClass({
    getNiceTime(timestamp) {
        const time = new Date(timestamp);
        let mins = time.getMinutes();
        if (mins < 10) { mins = '0' + mins; }
        const timeString = time.toLocaleDateString() + " om " + time.getHours() + ':' + mins;
        return timeString;
    },
    render() {
        const User = this.props.personel[this.props.selectedUser];

        const presentText = ['Nee', 'Ja'][User.In * 1];
        const lastInTime = User.In ? 'Nu' : this.getNiceTime(User.LastIn);
        const lastOutTime = !User.In ? 'Nu' : this.getNiceTime(User.LastOut);

        return (
            <div className="info">
                <h2 className="info__header">{User.Name}</h2>
                <InfoText label="Aanwezig" text={presentText} />
                <InfoText label="Laatst aanwezig" text={lastInTime} />
                <InfoText label="Laatst afwezig" text={lastOutTime} />
            </div>
            );
    }
});

export default Info;