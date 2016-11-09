
import React from 'react';

import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';

import Path from '../Path.js';

import Personel from '../mocks/Personel';

const Info = require(Path.components + '/Info.js').default;

describe('<Info />', () => {
    let InfoCn;
    const selectedUser = { index: 0 };
    const mockProps = {
        selectedUser,
        personel: Personel,
        user: Personel[0]
    };

    beforeEach(() => {
        InfoCn = shallow(<Info {...mockProps} />);
    });
    afterEach(() => {
        InfoCn = null;
    });
    it('should make an Info', () => {
        expect(InfoCn).to.exist;
    });
    it('should be a div', () => {
        expect(InfoCn.is('div')).to.be.true;
    });
    it('should contain a <h2>', () => {
        expect(InfoCn.find('h2')).to.have.length(1);
    });
    it('should set the H2 to the name of the selectedUser', () => {
        const expected = Personel[selectedUser.index].name;
        const actual = InfoCn.childAt(0).text();
        expect(actual).to.equal(expected);
    });
    it('should have a class indicating if the user is present', () => {
        const classes = {
            present: 'isPresent',
            notPresent: 'isNotPresent'
        };
        const InfoNotPresent = shallow(<Info selectedUser={{index: 1}} personel={Personel} user={Personel[1]} />);
        expect(InfoNotPresent.hasClass(classes.notPresent)).to.be.true;
        expect(InfoNotPresent.hasClass(classes.present)).to.not.be.true;
        expect(InfoCn.hasClass(classes.present)).to.be.true;
        expect(InfoCn.hasClass(classes.notPresent)).to.not.be.true;
    });
});