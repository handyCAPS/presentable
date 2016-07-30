
import React from 'react';

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Path from '../Path';

const PersonelSignal = require(Path.components + '/PersonelSignal').default;


describe("<PersonelSignal />", () => {
    it("should make a PersonelSignal", () => {
        let wrapper = shallow(<PersonelSignal />);
        expect(wrapper).to.exist;
        expect(wrapper.hasClass('signal')).to.be.true;
        expect(wrapper.type()).to.equal('div');
    });
});