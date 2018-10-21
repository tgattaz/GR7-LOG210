import React from 'react';
import ReactDOM from 'react-dom';
import RechercheReferent from '../services/RechercheReferent';

it('Recherche Referent Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RechercheReferent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Recherche rerent trouve', () => {
  const div = document.createElement('div');
  var a = <RechercheReferent />;

  expect(1 + 2).toBeEqualTo(3);

  ReactDOM.render(a, div, () => {
    
  });
  ReactDOM.unmountComponentAtNode(div);
});