
import React from 'react';

import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';

import Path from '../Path.js';

const Info = require(Path.components + '/Info.js').default;
const personel = require(Path.json + '/personel.json').personel;

describe('<Info />', () => {
    let InfoCn;
    const selectedUser = { index: 0 };
    beforeEach(() => {
        InfoCn = shallow(<Info selectedUser={selectedUser} personel={personel} />);
    });
    it('should make an Info', () => {
        expect(InfoCn).to.exist;
    });
});