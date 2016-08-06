
import React from 'react';

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Path from '../Path';

const PersonelList = require(Path.components + '/PersonelList').default;

const Personel = require(Path.json + '/personel.json').personel;

describe("<PersonelList />", () => {
    it("should make a PersonelList", () => {
        let wrapper = shallow(<PersonelList selectedUser={{index:0}} personel={Personel} />);
        expect(wrapper).to.exist;
        expect(wrapper.hasClass('personel')).to.be.true;
        expect(wrapper.type()).to.equal('div');
    });
});