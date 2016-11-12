
const Timing = {
    days: {
        nl: {
            long: [
                "zondag",
                "maandag",
                "dinsdag",
                "woensdag",
                "donderdag",
                "vrijdag",
                "zaterdag"
            ],
            short: [
                "zo",
                "ma",
                "di",
                "wo",
                "do",
                "vr",
                "za"
            ]
        }
    },
    getTimeByUnit(seconds) {
        const secondsLeft = seconds % 60;
        const minutesPassed = (seconds - secondsLeft) / 60;
        const minutesLeft = minutesPassed % 60;
        const hoursPassed = (minutesPassed - minutesLeft) / 60;
        const hoursLeft = hoursPassed % 24;
        const daysPassed = (hoursPassed - hoursLeft) / 24;
        return {
            days: daysPassed,
            hours: hoursLeft,
            minutes: minutesLeft,
            seconds: secondsLeft
        };
    },
    getPassedSeconds(timestamp, setNow) {
        const now = setNow || Date.now();
        const secondsPassed = Math.floor((now - timestamp) / 1000);

        return secondsPassed;
    },
    getTimeString(seconds, verbs) {
        const times = this.getTimeByUnit(seconds);

        verbs = verbs || {
            days: 'dagen',
            hours: 'uur',
            minutes: 'minuten',
            seconds: 'seconden'
        };

        const timeArray = [];

        for (let unit in verbs) {
            timeArray.push([times[unit], verbs[unit]]);
        }

        const timeString = timeArray.map(v => v.join(' ')).join(', ');

        return timeString;
    },
    getTimerObject(timestamp, labels, setNow) {
        const secondsPassed = this.getPassedSeconds(timestamp, setNow);
        const times = this.getTimeByUnit(secondsPassed);
        labels = labels || {
            days: 'Dag',
            hours: 'Uur',
            minutes: 'Min',
            seconds: 'Sec'
        };

        let timerObject = {};

        for (let unit in labels) {
            timerObject[unit] = {
                label: labels[unit],
                value: times[unit]
            };
        }

        return timerObject;
    },
    getNiceTime(timestamp) {
        const time = new Date(timestamp);
        let mins = time.getMinutes();
        if (mins < 10) { mins = '0' + mins; }
        const timeString = time.toLocaleDateString() + " om " + time.getHours() + ':' + mins;
        return timeString;
    },
    getTimeString(seconds) {
        const times = this.getTimeByUnit(seconds);

        const verbs = {
            days: 'dagen',
            hours: 'uur',
            minutes: 'minuten',
            seconds: 'seconden'
        };

        const timeArray = [];

        for (let unit in verbs) {
            timeArray.push([times[unit], verbs[unit]]);
        }

        const timeString = timeArray.map(v => v.join(' ')).join(', ');

        return timeString;
    }
};

export default Timing;