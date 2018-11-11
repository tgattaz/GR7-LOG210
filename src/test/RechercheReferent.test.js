import React from 'react';
'use strict';
import Adapter from 'enzyme-adapter-react-16';
//import ReactDOM from 'react-dom';
import RechercheReferentForm from '../components/forms/selectionForms/RechercheReferentForm';
import { shallow, render, mount, configure } from 'enzyme';
configure({ adapter: new Adapter() });


describe('Recherche Referent Renders without crashing',() => {
it('Recherche Referent Renders without crashing', () => {
  const wrapper = shallow( < RechercheReferentForm /> );
  expect(wrapper).toMatchSnapshot();
});
});

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