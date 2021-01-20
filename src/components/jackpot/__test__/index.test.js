import React from 'react';
import Button from "../index";
import {shallow,configure} from 'enzyme';

describe('<Button/>', () => {

    test('render button with default text', () => {
        const component = shallow(<Button/>);
        expect(component.find('.action_btn').text()).toEqual("Get More");
    })

    test('render button with link wrapper', () => {
        const linkUrl = "https://some.com";
        const component = shallow(<Button dataRole="link" link={linkUrl} text="Some Text" />);
        const linkWrappr = component.render().find('a.link-wrapper');
        const button = component.render().find('button');
        expect(linkWrappr).toBeTruthy();
        expect(button.text()).toEqual("Some Text");
    });
});
