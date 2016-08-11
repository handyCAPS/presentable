
import React from 'react';

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Path from '../Path';

const CountingClock = require(Path.components + '/CountingClock').default;


describe("<CountingClock>", () => {
    let clock;
    const timeObject = {
        days: {
            label: '',
            value: 0
        },
        hours: {
            label: '',
            value: 24
        },
        minutes: {
            label: '',
            value: 55
        },
        seconds: {
            label: '',
            value: 2
        }
    };
    beforeEach(() => {
        clock = shallow(<CountingClock timer={timeObject} />);
    });
    afterEach(() => {
        clock = null;
    });
    it('should make a counting clock', () => {
        expect(clock).to.exist;
    });
    it('should have the required type and classes', () => {
        expect(clock.type()).to.equal('div');
        expect(clock.hasClass('counting-clock')).to.be.true;
    });
    it('should have optional extra classes', () => {
        const extraClass = 'extra';
        const classClock = shallow(<CountingClock classNames={[extraClass]} timer={timeObject} />);
        expect(classClock.hasClass(extraClass)).to.be.true;
    });
    it('should have four divs as children', () => {
        expect(clock.children().length).to.equal(4);
    });
});