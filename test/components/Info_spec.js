
import React from 'react';

import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';

import Path from '../Path.js';

const Info = require(Path.components + '/Info.js').default;

describe('<Info />', () => {
    let InfoCn;
    const selectedUser = { index: 0 };
    const personel = [{
            "ID": 0,
            "Name": "Tim Toom",
            "In": false,
            "LastIn": 1468497990000,
            "LastOut": 1468497990000,
            "LastChange": 1468497990000
        },
        {
            "ID": 1,
            "Name": "Mark Park",
            "In": true,
            "LastIn": 1468497990000,
            "LastOut": 1468497990000,
            "LastChange": 1468497990000
        }];
    beforeEach(() => {
        InfoCn = shallow(<Info selectedUser={selectedUser} personel={personel} />);
    });
    afterEach(() => {
        InfoCn = null;
    });
    it('should make an Info', () => {
        expect(InfoCn).to.exist;
    });
    it('should be a div, containing a h2 and a p', () => {
        expect(InfoCn.type()).to.equal('div');
        expect(InfoCn.childAt(0).type()).to.equal('h2');
        expect(InfoCn.childAt(1).type()).to.equal('p');
    });
    it('should set the H2 to the name of the selectedUser', () => {
        const expected = personel[selectedUser.index].Name;
        const actual = InfoCn.childAt(0).text();
        expect(actual).to.equal(expected);
    });
    it('should have a class indicating if the user is present', () => {
        const classes = {
            present: 'isPresent',
            notPresent: 'isNotPresent'
        };
        const InfoPresent = shallow(<Info selectedUser={{index: 1}} personel={personel} />);
        expect(InfoCn.hasClass(classes.notPresent)).to.be.true;
        expect(InfoCn.hasClass(classes.present)).to.not.be.true;
        expect(InfoPresent.hasClass(classes.present)).to.be.true;
        expect(InfoPresent.hasClass(classes.notPresent)).to.not.be.true;
    });
});