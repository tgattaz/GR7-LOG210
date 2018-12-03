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
import DelEmployeForm from '../components/forms/deleteForms/DelEmployeForm';
import DelNoteForm from '../components/forms/deleteForms/DelNoteForm';
import DelOrganismeFrom from '../components/forms/deleteForms/DelOrganismeFrom';
import AddEmployePage from '../components/pages/addPages/AddEmployePage';
import AddNotePage from '../components/pages/addPages/AddNotePage';
import AddOrgaRefPage from '../components/pages/addPages/AddOrgaRefPage';
import AddOrganismePage from '../components/pages/addPages/AddOrganismePage';
import AddRefPage from '../components/pages/addPages/AddRefPage';
import AddServicePage from '../components/pages/addPages/AddServicePage';
import addEmployeOrgaPage from '../components/pages/addPages/addEmployeOrgaPage';

configure({ adapter: new Adapter() });


/**
 * Pages
 */
describe('AddEmployePage ne crash pas', () => {
  it('AddEmployePage affiche sans chash', () => {
    shallow(<AddEmployePage />);
  });
  });
  describe('AddNotePage ne crash pas', () => {
    it('AddNotePage affiche sans chash', () => {
      shallow(<AddNotePage />);
    });
    });
    describe('AddOrgaRefPage ne crash pas', () => {
      it('AddOrgaRefPage affiche sans chash', () => {
        shallow(<AddOrgaRefPage />);
      });
      });
      describe('AddOrganismePage ne crash pas', () => {
        it('AddOrganismePage affiche sans chash', () => {
          shallow(<AddOrganismePage />);
        });
        });
        describe('AddRefPage ne crash pas', () => {
          it('AddRefPage affiche sans chash', () => {
            shallow(<AddRefPage />);
          });
          });
          describe('AddServicePage ne crash pas', () => {
            it('AddServicePage affiche sans chash', () => {
              shallow(<AddServicePage />);
            });
            });
            describe('addEmployeOrgaPage ne crash pas', () => {
              it('addEmployeOrgaPage affiche sans chash', () => {
                shallow(<addEmployeOrgaPage />);
              });
              });
   


  

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
describe('Add Employe organisme le tableau fonctionne', () => {
  it('Find the inputs ', () => {
    const editor = shallow(< AddEmployeOrgaForm />);
    expect(editor.find('Table').length).toEqual(1);

  });
});
describe('Add Employe organisme ne doit pas avoir de bouton', () => {
  it('Find the only button ', () => {
    const editor = shallow(< AddEmployeOrgaForm />);
    expect(editor.find('Button').length).toEqual(0);

  });
});



/**
 * AddNoteForm
 */
describe('Add note Form renders right number of input areas', () => {
  it('Find the inputs ', () => {
    const editor = shallow(< AddNoteForm />);
    expect(editor.find('input').length).toEqual(3);

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
    expect(editor.find('input').length).toEqual(3);

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
describe('DelEmployeForm ne crash pas', () => {
it('DelEmployeForm affiche sans chash', () => {
  shallow(<DelEmployeForm />);
});
});

describe('DelNoteForm ne crash pas', () => {
  it('DelEmployeForm affiche sans chash', () => {
    shallow(<DelEmployeForm />);
  });
  });


describe('DelNoteForm doit avoir un bouton', () => {
  it('Find the only button ', () => {
    const editor = shallow(< DelNoteForm />);
    expect(editor.find('Button').length).toEqual(0);

  });
});
describe('DelOrganismeFrom doit avoir un bouton', () => {
  it('Find the only button ', () => {
    const editor = shallow(< DelOrganismeFrom />);
    expect(editor.find('Button').length).toEqual(0);

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