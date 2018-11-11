import React from 'react';
'use strict';
import Adapter from 'enzyme-adapter-react-16';
//import ReactDOM from 'react-dom';
import RechercheReferentForm from '../components/forms/selectionForms/RechercheReferentForm';
//import Foo from './Foo';

import { shallow, render, mount, configure } from 'enzyme';
configure({ adapter: new Adapter() });
//import TestUtils from 'react-addons-test-utils';

describe('Recherche Referent Renders without crashing',() => {
it('Recherche Referent Renders without crashing', () => {
  const wrapper = shallow( < RechercheReferentForm /> );
 // const rechercherState = wrapper.state().rechercher
  expect(wrapper).toMatchSnapshot();
  //expect(rechercherState).toEqual(0)
  
})
})

/*const div = document.createElement('div');
  ReactDOM.render( < RechercheReferentPage / > , div);
  ReactDOM.unmountComponentAtNode(div); ;

it('Recherche rerent trouve', () => {
  const div = document.createElement('div');
  const a = < RechercheReferentPage / > ;
  
  ReactDOM.render(a, div, () => {
  });
  ReactDOM.unmountComponentAtNode(div);
}); */