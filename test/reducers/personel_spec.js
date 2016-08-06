import { expect } from 'chai';

import Path from '../Path';

const Personel = require(Path.reducers + '/Personel').default;
const { changePresence, updatePersonel } = require(Path.root + '/actioncreators');

describe('Testing Personel', () => {
    let Now, initialState, changedState;
    beforeEach(() => {
        {
                Now = new Date().getTime();
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

    it('should completely replace the personel state', () => {
        const Person = {
            "ID": 0,
            "Name": "Tim Toom",
            "In": false,
            "LastIn": 1468497990,
            "LastOut": 1468497990,
            "LastChange": 1468497990
        };
        const newState = [ Person ];
        const updateAction = updatePersonel(newState);

        expect(Personel([], updateAction)).to.deep.equal(newState);
    });
});