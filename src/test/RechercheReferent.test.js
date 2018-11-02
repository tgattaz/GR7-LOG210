import React from 'react';
//import ReactDOM from 'react-dom';
import RechercheReferentForm from '../components/forms/selectionForms/RechercheReferentForm';
import Foo from './Foo';

import {shallow} from 'enzyme'
//import TestUtils from 'react-addons-test-utils';

describe('Recherche Referent Renders without crashing',() => {
it('Recherche Referent Renders without crashing', () => {
  const wrapper = shallow( < RechercheReferentForm / > );
 // const rechercherState = wrapper.state().rechercher
  expect(wrapper.find(Foo)).to.have.lengthOf(3);
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