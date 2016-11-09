import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import Path from '../Path.js';

const InfoText = require(Path.components + '/InfoText.js').default;

describe('<InfoText />', () => {
    const mockProps = {
        label: 'Some label',
        text: 'Some text'
    };
    const infoText = shallow(<InfoText {...mockProps} />);

    it('should make a <InfoText />', () => {
        expect(infoText).to.exist;
    });

    it('should be a p', () => {
        expect(infoText.is('p')).to.be.true;
    });

    it('should have a class of info__text', () => {
        expect(infoText.hasClass('info__text')).to.be.true;
    });

    it('should contain two spans', () => {
        expect(infoText.find('span')).to.have.length(2);
    });

    it('should contain a span with the class info__label', () => {
        expect(infoText.find('span.info__label')).to.have.length(1);
    });

    it('should contain a span with the class info__value', () => {
        expect(infoText.find('span.info__value')).to.have.length(1);
    });

    it('should contain the label text followed by a colon', () => {
        expect(infoText.find('.info__label').text()).to.equal(mockProps.label + ':');
    });

    it('should contain the value text proceeded by a space', () => {
        expect(infoText.find('.info__value').text()).to.equal(' ' + mockProps.text);
    });

    it('should accept custom classes for the wrapper', () => {
        const classNamesWrap = ['customClass'];
        const customProps = {
            ...mockProps,
            classNamesWrap
        };
        const customInfoText = shallow(<InfoText {...customProps} />)
        const actual = customInfoText.hasClass(classNamesWrap[0]);
        expect(actual).to.be.true;
    });

    it('should accept custom classes for the label', () => {
        const classNamesLabel = ['customClass'];
        const customProps = {
            ...mockProps,
            classNamesLabel
        };
        const customInfoText = shallow(<InfoText {...customProps} />)
        const actual = customInfoText.find('span.info__label').hasClass(classNamesLabel[0]);
        expect(actual).to.be.true;
    });

    it('should accept custom classes for the value', () => {
        const classNamesValue = ['customClass'];
        const customProps = {
            ...mockProps,
            classNamesValue
        };
        const customInfoText = shallow(<InfoText {...customProps} />)
        const actual = customInfoText.find('span.info__value').hasClass(classNamesValue[0]);
        expect(actual).to.be.true;
    });
});