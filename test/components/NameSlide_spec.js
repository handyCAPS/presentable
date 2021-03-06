import React from 'react';

import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, render, mount } from 'enzyme';

import Path from '../Path.js';

import Personel from '../mocks/Personel';

const NameSlide = require(Path.components + '/NameSlide.js').default;
const NameSignal = require(Path.components + '/NameSignal.js').default;

describe("<NameSlide />", () => {

    const selectedUserIndex = 0;

    const mockProps = {
        name: Personel[selectedUserIndex].name,
        index: selectedUserIndex
    };

    let slide;

    beforeEach(() => {
        slide = shallow(<NameSlide {...mockProps} />);
    });

    afterEach(() => {
        slide = null;
    });

    it('should make a <NameSlide />', () => {
         expect(slide).to.exist;
    });

    it('should be a div', () => {
        expect(slide.is('div')).to.be.true;
    });

    it('should have a class of name-slide', () => {
        expect(slide.hasClass('name-slide')).to.be.true;
    });

    it('should contain two <NameSignal> elements', () => {
        expect(slide.containsMatchingElement(<NameSignal />)).to.be.true;
        expect(slide.find(NameSignal)).to.have.length(2);
    });

    it('should have a div with class name-slide__name', () => {
        const name = slide.find('.name-slide__name');
        expect(name).to.have.length(1);
    });

    it('should take custom classes for the wrapper (.name-slide)', () => {
        const classNamesWrap = ['myCustomClass'];
        const mockPropsCustom = {
            ...mockProps,
            classNamesWrap
        };
        const slideCustom = shallow(<NameSlide {...mockPropsCustom} />);
        expect(slideCustom.hasClass(classNamesWrap)).to.be.true;
    });

    it('should take custom classes for the name wrapper (.name-slide__name)', () => {
        const classNamesName = ['myCustomClass'];

        const mockPropsCustom = {
            ...mockProps,
            classNamesName
        };
        const slideCustom = shallow(<NameSlide {...mockPropsCustom} />);
        expect(slideCustom.find('.name-slide__name').hasClass(classNamesName)).to.be.true;
    });

    it('should have the name of the currentUser', () => {
        expect(slide.find('.name-slide__name').text()).to.equal(Personel[0].name);
    });

    it('should trigger the passed in callback when clicked', () => {
        const spy = sinon.spy();
        const customMockProps = {
            ...mockProps,
            handleClick: spy
        };
        const customSlide = shallow(<NameSlide {...customMockProps} />);
        customSlide.simulate('click');
        expect(spy.calledOnce).to.be.true;
    });

    it('should trigger the passed in callback whith the index as the first argument', () => {
        const spy = sinon.spy();
        const customMockProps = {
            ...mockProps,
            handleClick: spy
        };
        const customSlide = shallow(<NameSlide {...customMockProps} />);
        customSlide.simulate('click');
        expect(spy.args[0][0]).to.equal(customMockProps.index);
    });
});
