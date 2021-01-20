import React from 'react';
import Jackpot from "../jackpot";
import {shallow,configure} from 'enzyme';

describe('<Jackpot/>', () => {
    test('render button with default text', () => {
        const component = shallow(<Jackpot amount={130000000} currency="USD"/>);
        expect(component.text()).toEqual("$130 Million");
    })
});
