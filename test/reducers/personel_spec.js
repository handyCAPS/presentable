import { expect } from 'chai';

import Path from '../Path';

const Personel = require(Path.reducers + '/Personel').default;
const changePresence = require(Path.root + '/actioncreators').changePresence;

describe('Testing Personel', () => {
    let Now, initialState, changedState;
    beforeEach(() => {
        {
                Now = Math.floor(new Date().getTime());
                initialState = [{
                        "ID": 0,
                        "Name": "Tim Toom",
                        "In": false,
                        "LastIn": 1468497990,
                        "LastOut": 1468497990,
                        "LastChange": 1468497990
                    }];
                changedState = [{
                        "ID": 0,
                        "Name": "Tim Toom",
                        "In": true,
                        "LastIn": 1468497990,
                        "LastOut": Now,
                        "LastChange": Now
                    }];
            }
    });
    const changeAction = changePresence(0, true);

    it('should change the presence based on the index', () => {
        expect(Personel(initialState, changeAction)).to.deep.equal(changedState);
    });
});