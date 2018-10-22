import React from 'react';
import ReactDOM from 'react-dom';
import RechercheReferent from '../services/RechercheReferent';
import TestUtils from 'react-addons-test-utils';

it('Recherche Referent Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RechercheReferent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Recherche rerent trouve', () => {
  const div = document.createElement('div');
  const a = <RechercheReferent />;  
  
  ReactDOM.render(a, div, () => {
  });
  ReactDOM.unmountComponentAtNode(div);
});