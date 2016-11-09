
import React from 'react';

import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';

import Path from '../Path.js';

import Personel from '../mocks/Personel';

const Info = require(Path.components + '/Info.js').default;
const CountingClock = require(Path.components + '/CountingClock.js').default;
const NameSlide = require(Path.components + '/NameSlide.js').default;

describe('<Info />', () => {

    let InfoMock;
    const selectedUser = { index: 0 };
    const mockProps = {
        selectedUser,
        personel: Personel,
        user: Personel[0]
    };

    beforeEach(() => {
        InfoMock = shallow(<Info {...mockProps} />);
    });

    afterEach(() => {
        InfoMock = null;
    });

    it('should make an Info', () => {
        expect(InfoMock).to.exist;
    });

    it('should be a div', () => {
        expect(InfoMock.is('div')).to.be.true;
    });

    it('should contain a <h2>', () => {
        expect(InfoMock.find('h2')).to.have.length(1);
    });

    it('should set the H2 to the name of the selectedUser', () => {
        const expected = Personel[selectedUser.index].name;
        const actual = InfoMock.childAt(0).text();
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
        expect(InfoMock.hasClass(classes.present)).to.be.true;
        expect(InfoMock.hasClass(classes.notPresent)).to.not.be.true;
    });

    it('should contain a <CountingClock />', () => {
        expect(InfoMock.find(CountingClock)).to.have.length(1);
    });

    it('should contain a <NameSlide />', () => {
        expect(InfoMock.find(NameSlide)).to.have.length(1);
    });
});