import React from 'react';
'use strict';
import Adapter from 'enzyme-adapter-react-16';
//import ReactDOM from 'react-dom';
import AddDemandeServicePage from '../components/pages/addPages/AddDemandeServicePage';
import DemandeServiceSelectionPage from '../components/pages/selectionPages/DemandeServiceSelectionPage';
import { shallow, render, mount, configure } from 'enzyme';
import AddDemandeServiceForm from '../components/forms/addOrUpdateForms/AddDemandeServiceForm';
import DemandeServiceSelectionForm from '../components/forms/selectionForms/DemandeServiceSelectionForm';

configure({ adapter: new Adapter() });

it('AddDemandeServicePage Renders correctly', () => {
    const editor = shallow(< AddDemandeServicePage />);
    expect(editor.find('AddDemandeServiceForm').length).toEqual(1);
    expect(editor.find('h2').text()).toEqual("Créer une demande de service");
});


it('DemandeServiceSelectionPage Renders correctly', () => {
    const wrapper = shallow(< DemandeServiceSelectionPage />);
    expect(wrapper.find('DemandeServiceSelectionForm').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual("Liste des demandes de service");
});

it('AddDemandeServiceForm Renders correctly', () => {
    const wrapper = mount(< AddDemandeServiceForm />);
    expect(wrapper.find('input').length).toEqual(7);
    expect(wrapper.find("Button").length).toBe(1);
    expect(wrapper.find("label").length).toBe(10);
});

it('DemandeServiceSelectionForm Renders correctly', () => {
    const wrapper = shallow(< DemandeServiceSelectionForm />);
    expect(wrapper.find('Table').length).toEqual(1);
});