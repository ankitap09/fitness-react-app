import React from 'react';
import { shallow } from 'enzyme';
import CreateTrainerComponent from '../component/CreateTrainerComponent';
//import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent } from '@testing-library/react';


const setUp = (props = {}) => {
    const component = shallow(<CreateTrainerComponent {...props} />);
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
            trainerId:'1',
            trainerName:'Kshitija',
            emailId: 'K@gmail.com',
            address: 'Katraj',
            mobileNo: '7845122356',
            password: 'K@24',
            role:'TRAINER'
        };
        wrapper = setUp(props);
    });

    it('should render Trainer component without errors', () => {
        const component = findByTestAttr(wrapper,'TrainerComponent');
        expect(component.length).toBe(1);
    });

    it('should render input tag', () => {
        const input = findByTestAttr(wrapper,'trainerName');
        expect(input.length).toBe(1);
    })

});

describe('should not have props', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should not render', () => {
        const component = findByTestAttr(wrapper,'TrainerComponent');
        console.debug(component);
        expect(component.length).toBe(0);
    });
});
