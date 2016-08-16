
import { expect } from 'chai';

import Path from '../Path';

const Timing = require(Path.utils + '/Timing').default;

describe('Utils / Timing', () => {

    describe('getPassedSeconds', () => {
        it('should return the number of seconds passed from a timestamp till now', () => {
            const start = 0;
            const end = 100000;
            const actual = Timing.getPassedSeconds(start, end);
            const expected = 100;
            expect(actual).to.equal(expected);
        });
    });

    describe('getTimeByUnit', () => {
        it('should return an object splitting seconds into days hours etc', () => {
            const days = 1;
            const hours = 12;
            const minutes = 34;
            const seconds = 12;
            const totalSeconds = (days * (60 * 60 * 24)) +
                                (hours * (60 * 60)) +
                                (minutes * 60) +
                                seconds;
            const expected = {
                days,
                hours,
                minutes,
                seconds
            };
            const actual = Timing.getTimeByUnit(totalSeconds);
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('getTimerObject', () => {
        const days = 1;
        const hours = 12;
        const minutes = 34;
        const seconds = 12;
        const totalSeconds = (days * (60 * 60 * 24)) +
                            (hours * (60 * 60)) +
                            (minutes * 60) +
                            seconds;
        const labels = {
            days: 'Dagen',
            hours: 'Uren',
            minutes: 'Minuten',
            seconds: 'Seconden'
        };
        const expected = {
            days: {
                label: labels.days,
                value: days
            },
            hours: {
                label: labels.hours,
                value: hours
            },
            minutes: {
                label: labels.minutes,
                value: minutes
            },
            seconds: {
                label: labels.seconds,
                value: seconds
            }
        };
        const timestamp = 0;
        const setNow = totalSeconds * 1000;
        const actual = Timing.getTimerObject(timestamp, labels, setNow);

        expect(actual).to.deep.equal(expected);
    });

});