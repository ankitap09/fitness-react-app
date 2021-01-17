import React from 'react';
import { shallow } from 'enzyme';
import CreateAdminComponent from '../component/CreateAdminComponent';
//import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent } from '@testing-library/react';


const setUp = (props = {}) => {
    const component = shallow(<CreateAdminComponent {...props} />);
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
            admin_id:'1001',
                admin_name:'Ankita',
                emailId: 'Ankita@gmail.com',
                address: 'Pune',
                mobileNo: '8989562354',
                password: 'Pansare&%45',
                role:'ADMIN'
        };
        wrapper = setUp(props);
    });

    it('should render Trainer component without errors', () => {
        const component = findByTestAttr(wrapper,'AdminComponent');
        expect(component.length).toBe(1);
    });

    it('should render input tag', () => {
        const input = findByTestAttr(wrapper,'admin_name');
        expect(input.length).toBe(1);
    })

});

describe('should not have props', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should not render', () => {
        const component = findByTestAttr(wrapper,'AdminComponent');
        console.debug(component);
        expect(component.length).toBe(0);
    });
});