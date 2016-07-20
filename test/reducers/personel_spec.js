import { expect } from 'chai';

import Path from '../Path';

const Personel = require(Path.reducers + '/Personel').default;
const changePresence = require(Path.root + '/actioncreators').changePresence;

describe('Testing Personel', () => {
    const Now = Math.floor(new Date().getTime() / 1000);
    const initialState = [{
            "ID": 0,
            "Name": "Tim Toom",
            "In": false,
            "LastIn": 1468497990,
            "LastOut": 1468497990,
            "LastChange": 1468497990
        }];
    const changedState = [{
            "ID": 0,
            "Name": "Tim Toom",
            "In": true,
            "LastIn": 1468497990,
            "LastOut": 1468497990,
            "LastChange": Now
        }];
    const changeAction = changePresence(0, true);
    console.log("Now", Now);
    it('should change the presence based on the index', () => {
        expect(Personel(initialState, changeAction)).to.deep.equal(changedState);
    });
});