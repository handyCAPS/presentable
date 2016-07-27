
import React from 'react';

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Path from '../Path';

const PersonelList = require(Path.components + '/PersonelList').default;

describe("<PersonelList />", () => {
    let wrapper = shallow(<PersonelList />);
    expect(wrapper).to.exist;
});