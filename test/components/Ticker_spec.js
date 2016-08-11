
import React from 'react';

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Path from '../Path';

const Ticker = require(Path.components + '/Ticker').default;

describe('<Ticker />', () => {
    let shallowTicker;
    beforeEach(() => {
        shallowTicker = shallow(<Ticker />);
    });
    afterEach(() => {
        shallowTicker = null;
    });
    it('should make a ticker', () => {
        expect(shallowTicker).to.exist;
    });
    it('should have the required type and class', () => {
        expect(shallowTicker.type()).to.equal('div');
        expect(shallowTicker.hasClass('ticker')).to.be.true;
    });
});
