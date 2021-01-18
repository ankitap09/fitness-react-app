import React from 'react';
import { shallow } from 'enzyme';
import CreateUserComponent from '../component/CreateUserComponent';
//import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent } from '@testing-library/react';


const setUp = (props = {}) => {
    const component = shallow(<CreateUserComponent {...props} />);
    return component;
};

const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe('have props', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            userId:'1001',
            fname:'Pallavi',
            lname:'Badhe',
            emailId:'PalBad@gmail.com',
            shippingAddress:'Pune',
            country:'India',
            state:'Maharashtra',
            city:'Pune',
            pincode:'411046',
            mobileNo:'7894562563',
            age:'22',
            password:'Pallavi@23',
            role:'USER'
        };
        wrapper = setUp(props);
    });

    it('should render Trainer component without errors', () => {
        const component = findByTestAttr(wrapper,'UserComponent');
        expect(component.length).toBe(1);
    });

    it('should render input tag', () => {
        const input = findByTestAttr(wrapper,'fname');
        expect(input.length).toBe(1);
    })

});

/* describe('should not have props', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should not render', () => {
        const component = findByTestAttr(wrapper,'UserComponent');
        console.debug(component);
        expect(component.length).toBe(0);
    });
}); */