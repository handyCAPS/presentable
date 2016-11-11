
import '../setupdom';

import React from 'react';

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Path from '../Path.js';

import Personel from '../mocks/Personel';

const Info = require(Path.components + '/Info.js').default;
const CountingClock = require(Path.components + '/CountingClock.js').default;
const NameSlide = require(Path.components + '/NameSlide.js').default;
const InfoText = require(Path.components + '/InfoText.js').default;

describe('<Info />', () => {

    let InfoMock;
    const selectedUser = { index: 0 };
    const User = Personel[selectedUser.index];
    const userIsPresent = User.present;
    const {
        name,
        lastIn,
        lastOut,
        lastChange
    } = User;
    const mockProps = {
        index: selectedUser.index,
        name,
        userIsPresent,
        lastIn,
        lastOut,
        lastChange
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

    it('should contain a NameSlide with a class of present if the user is present', () => {
        const actual = InfoMock.find(NameSlide).props().classNamesName.indexOf('present') != -1;
        expect(actual).to.equal(userIsPresent);
    });

    it('should contain four <InfoText> elements', () => {
        expect(InfoMock.find(InfoText)).to.have.length(4);
    });

    it('should trigger the callback when the NameSlide gets clicked', () => {
        const spy = sinon.spy();
        const customMockProps = {
            ...mockProps,
            handleInfoNameSlideClick: spy
        };
        const customMockinfo = mount(<Info {...customMockProps} />);
        customMockinfo.find(NameSlide).simulate('click');
        // customMockinfo.unmount();
        expect(spy.calledOnce).to.be.true;
    });

// TODO: figure out why this always passes
    it('should trigger the callback with the passed index as the first parameter when the NameSlide gets clicked', () => {
        const spy = sinon.spy();
        const customMockProps = {
            ...mockProps,
            handleInfoNameSlideClick: spy
        };
        const customMockinfo = mount(<Info {...customMockProps} />);
        customMockinfo.find(NameSlide).simulate('click');
        expect(spy.calledWith(selectedUser.index)).to.be.true;
        // customMockinfo.unmount();
        expect(spy.args[0][0]).to.equal(selectedUser.index);
    });
});