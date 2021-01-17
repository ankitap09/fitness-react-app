import React from 'react';
import { shallow } from 'enzyme';
import CreateAppointmentComponent from '../component/CreateAppointmentComponent';
//import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent } from '@testing-library/react';


const setUp = (props = {}) => {
    const component = shallow(<CreateAppointmentComponent {...props} />);
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
            appointment_id:'1',
            user_id:'20',
            trainer_id:'10',
            trainer_Preference:'Male',
            phy_the:'Yes',
            amount:'1500',
            location:'Pune',
            date:'22-10-2021',
        };
        wrapper = setUp(props);
    });

    it('should render Trainer component without errors', () => {
        const component = findByTestAttr(wrapper,'AppointmentComponent');
        expect(component.length).toBe(1);
    });

    it('should render input tag', () => {
        const input = findByTestAttr(wrapper,'location');
        expect(input.length).toBe(1);
    })

});

describe('should not have props', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should not render', () => {
        const component = findByTestAttr(wrapper,'AppointmentComponent');
        console.debug(component);
        expect(component.length).toBe(0);
    });
});