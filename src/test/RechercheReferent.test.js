import React from 'react';
'use strict';
import Adapter from 'enzyme-adapter-react-16';
//import ReactDOM from 'react-dom';
import RechercheReferentForm from '../components/forms/selectionForms/RechercheReferentForm';
import OrgaRefSelectionForm from '../components/forms/selectionForms/OrgaRefSelectionForm';
import { shallow, render, mount, configure } from 'enzyme';
import AddEmployeForm from '../components/forms/addOrUpdateForms/AddEmployeForm';
import AddEmployeOrgaForm from '../components/forms/addOrUpdateForms/AddEmployeOrgaForm';
import AddOrganismeForm from '../components/forms/addOrUpdateForms/AddOrganismeForm';
import AddNoteForm from '../components/forms/addOrUpdateForms/AddNoteForm';
import AddServiceForm from '../components/forms/addOrUpdateForms/AddServiceForm';
import AddRefForm from '../components/forms/addOrUpdateForms/AddRefForm';
import EmployeForm from '../components/forms/basicForms/EmployeForm';
import OrganismeForm from '../components/forms/basicForms/OrganismeForm';
import RefForm from '../components/forms/basicForms/RefForm';
import NoteForm from '../components/forms/basicForms/NoteForm';
import ServiceForm from '../components/forms/basicForms/ServiceForm';
configure({ adapter: new Adapter() });


describe('Recherche Referent Renders without crashing', () => {
  it('Recherche Referent Renders without crashing', () => {
    const wrapper = shallow(< RechercheReferentForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Recherche Referent renders an output area', () => {
  it('Find the specific output area', () => {
    const editor = shallow(< RechercheReferentForm />);
    expect(editor.find('div.rechercheReferent').length).toEqual(1);

  });
});

describe('Orga Ref Renders without crashing', () => {
  it('Orga Ref Renders without crashing', () => {
    const wrapper = shallow(< OrgaRefSelectionForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Add Employe Form renders right number of input areas', () => {
  it('Find the inputs ', () => {
    const editor = shallow(< AddEmployeForm />);
    expect(editor.find('input').length).toEqual(14);

  });
});

describe('Add Employe Form renders a button', () => {
  it('Find the only button ', () => {
    const editor = shallow(< AddEmployeForm />);
    expect(editor.find('Button').length).toEqual(1);

  });
});
describe('Add Employe Form renders the button with his text', () => {
  it('Find the text button and show that it can fail with wrong text value ', () => {
    const editor = shallow(< AddEmployeForm />);
    expect(editor.find('Button').text()).not.toEqual('Fail');

  });
});
/*
AddEmployeOrgaForm
*/
describe('Add Employe organisme Form renders right number of input areas', () => {
  it('Find the inputs ', () => {
    const editor = shallow(< AddEmployeOrgaForm />);
    expect(editor.find('input').length).toEqual(14);

  });
});

describe('Add Employe organisme Form renders a button', () => {
  it('Find the only button ', () => {
    const editor = shallow(< AddEmployeOrgaForm />);
    expect(editor.find('Button').length).toEqual(1);

  });
});
describe('Add Employe organisme Form renders the button with his text', () => {
  it('Find the text button and show that it can fail with wrong text value ', () => {
    const editor = shallow(< AddEmployeOrgaForm />);
    expect(editor.find('Button').text()).not.toEqual('Fail');

  });
});

/**
 * AddNoteForm
 */
describe('Add note Form renders right number of input areas', () => {
  it('Find the inputs ', () => {
    const editor = shallow(< AddNoteForm />);
    expect(editor.find('input').length).toEqual(14);

  });
});

describe('Add note Form renders a button', () => {
  it('Find the only button ', () => {
    const editor = shallow(< AddNoteForm />);
    expect(editor.find('Button').length).toEqual(1);

  });
});
describe('Add not Form renders the button with his text', () => {
  it('Find the text button and show that it can fail with wrong text value ', () => {
    const editor = shallow(< AddNoteForm />);
    expect(editor.find('Button').text()).not.toEqual('Fail');

  });
});
/**
 * AddNoteForm
 */
describe('Add note Form renders right number of input areas', () => {
  it('Find the inputs ', () => {
    const editor = shallow(< AddNoteForm />);
    expect(editor.find('input').length).toEqual(14);

  });
});

describe('Add note Form renders a button', () => {
  it('Find the only button ', () => {
    const editor = shallow(< AddNoteForm />);
    expect(editor.find('Button').length).toEqual(1);

  });
});
describe('Add not Form renders the button with his text', () => {
  it('Find the text button and show that it can fail with wrong text value ', () => {
    const editor = shallow(< AddNoteForm />);
    expect(editor.find('Button').text()).not.toEqual('Fail');

  });
});
describe('Add Organisme Form renders  input areas', () => {
  it('Find the inputs', () => {
    const editor = shallow(<AddOrganismeForm />);
    expect(editor.find('input').length).toEqual(9);

  });
});



describe('Add Ref Form renders an input areas', () => {
  it('Find the inputs ', () => {
    const editor = shallow(< AddRefForm />);
    expect(editor.find('input').length).toEqual(7);

  });
});

describe('Employe Form renders an output area', () => {
  it('Find the output area ', () => {
    const editor = shallow(< EmployeForm />);
    expect(editor.find('Table').length).toEqual(1);

  });
});
describe('Organisme Form renders an output area', () => {
  it('Find the output area ', () => {
    const editor = shallow(< OrganismeForm />);
    expect(editor.find('Table').length).toEqual(1);

  });
});
describe('Ref Form renders an output area', () => {
  it('Find the output area ', () => {
    const editor = shallow(< RefForm />);
    expect(editor.find('Table').length).toEqual(1);

  });
});

describe('Note Form renders an output area', () => {
  it('Find the output area ', () => {
    const editor = shallow(< NoteForm />);
    expect(editor.find('Table').length).toEqual(1);

  });
});

describe('Service Form renders an output area', () => {
  it('Find the output area ', () => {
    const editor = shallow(< ServiceForm />);
    expect(editor.find('Table').length).toEqual(1);

  });
});

describe('Add Service Form renders  input areas', () => {
  it('Find the inputs', () => {
    const editor = shallow(<AddServiceForm />);
    expect(editor.find('input').length).toEqual(4);

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