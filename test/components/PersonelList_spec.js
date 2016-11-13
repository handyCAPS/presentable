
import React from 'react';

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import '../setupdom';

import Path from '../Path';

const PersonelList = require(Path.components + '/PersonelList').default;
const NameSlide = require(Path.components + '/NameSlide').default;

const Personel = require(Path.json + '/personel.json').personel;

describe("<PersonelList />", () => {

    let mockPersonelList;
    const selectedUser = 0;
    const mockProps = {
        personel: Personel,
        selectedUser
    };

    beforeEach(() => {
        mockPersonelList = shallow(<PersonelList {...mockProps} />);
    });

    afterEach(() => {
        mockPersonelList = null;
    });

    it("should make a PersonelList", () => {
        expect(mockPersonelList).to.exist;
    });

    it("should be a div", () => {
        expect(mockPersonelList.is('div')).to.be.true;
    });

    it('should have a class of personel', () => {
        expect(mockPersonelList.hasClass('personel')).to.be.true;
    });

    it('should contain a NameSlide for every person in Personel', () => {
        expect(mockPersonelList.find(NameSlide)).have.length(Personel.length);
    });

    it('should trigger the passed in function when a NameSlide gets clicked', () => {
        const spy = sinon.spy();
        const mountedProps = {
            ...mockProps,
            handleClick: spy
        };
        const mountedList = mount(<PersonelList {...mountedProps}/>);
        mountedList.find(NameSlide).at(0).simulate('click');
        expect(spy.calledOnce).to.be.true;
    });

    it('should trigger the passed in function when a NameSlide gets clicked with the index as the first argument', () => {
        const calledIndex = 0;
        const spy = sinon.spy();
        const mountedProps = {
            ...mockProps,
            handleClick: spy
        };
        const mountedList = mount(<PersonelList {...mountedProps}/>);
        mountedList.find(NameSlide).at(calledIndex).simulate('click');
        expect(spy.args[0][0]).to.equal(calledIndex);
    });
});