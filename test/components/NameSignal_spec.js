
import React from 'react';

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Path from '../Path';

const NameSignal = require(Path.components + '/NameSignal').default;


describe("<NameSignal />", () => {
    it("should make a NameSignal", () => {
        let wrapper = shallow(<NameSignal />);
        expect(wrapper).to.exist;
        expect(wrapper.hasClass('signal')).to.be.true;
        expect(wrapper.type()).to.equal('div');
    });
});