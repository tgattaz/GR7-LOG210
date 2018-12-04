import React from 'react';
'use strict';
import Adapter from 'enzyme-adapter-react-16';
//import ReactDOM from 'react-dom';
import { shallow, render, mount, configure } from 'enzyme';
configure({ adapter: new Adapter() });

import HomePage from "../components/pages/basicPages/HomePage";
import LoginPage from "../components/pages/basicPages/LoginPage";
import EmployePage from "../components/pages/basicPages/EmployePage";
import AddEmployePage from "../components/pages/addPages/AddEmployePage";
import OrgaRefPage from "../components/pages/basicPages/OrgaRefPage";
import OrgaRefSelectionPage from "../components/pages/selectionPages/OrgaRefSelectionPage";
import AddOrgaRefPage from "../components/pages/addPages/AddOrgaRefPage";
import AddRefPage from "../components/pages/addPages/AddRefPage";
import RefPage from "../components/pages/basicPages/RefPage";
import OrganismePage from "../components/pages/basicPages/OrganismePage";
import AddOrganismePage from "../components/pages/addPages/AddOrganismePage";
import AddEmployeOrgaPage from "../components/pages/addPages/addEmployeOrgaPage";
import RechercheReferentPage from "../components/pages/selectionPages/RechercheReferentPage";
import DelRefPage from "../components/pages/deletePages/DelRefPage";
import UpdateRefPage from "../components/pages/updatePages/UpdateRefPage";
import DelOrganismePage from "../components/pages/deletePages/DelOrganismePage";
import UpdateOrganismePage from "../components/pages/updatePages/UpdateOrganismePage";
import UpdateOrganismeRefPage from "../components/pages/updatePages/UpdateOrganismeRefPage";
import DesactiverOraganismeRefPage from "../components/pages/deletePages/DesactiverOraganismeRefPage";
import DelEmployePage from "../components/pages/deletePages/DelEmployePage";
import UpdateEmployePage from "../components/pages/updatePages/UpdateEmployePage";
import RechercherFamillePage from "../components/pages/selectionPages/RechercherFamillePage";
import AddNotePage from "../components/pages/addPages/AddNotePage";
import DelNotePage from "../components/pages/deletePages/DelNotePage";
import UpdateNotePage from "../components/pages/updatePages/UpdateNotePage";
import NotePage from "../components/pages/basicPages/NotePage";
import PointServiceSelectionPage from "../components/pages/selectionPages/PointServiceSelectionPage";
import AddServicePage from "../components/pages/addPages/AddServicePage";
import ServicePage from "../components/pages/basicPages/ServicePage";

import LoginForm from "../components/forms/basicForms/LoginForm";
import EmployeForm from "../components/forms/basicForms/EmployeForm";
import AddEmployeForm from "../components/forms/addOrUpdateForms/AddEmployeForm";
import OrgaRefForm from "../components/forms/basicForms/OrgaRefForm";
import OrgaRefSelectionForm from "../components/forms/selectionForms/OrgaRefSelectionForm";
import AddOrgaRefForm from "../components/forms/addOrUpdateForms/AddOrgaRefForm";
import AddRefForm from "../components/forms/addOrUpdateForms/AddRefForm";
import RefForm from "../components/forms/basicForms/RefForm";
import OrganismeForm from "../components/forms/basicForms/OrganismeForm";
import AddOrganismeForm from "../components/forms/addOrUpdateForms/AddOrganismeForm";
import AddEmployeOrgaForm from "../components/forms/addOrUpdateForms/addEmployeOrgaForm";
import RechercheReferentForm from "../components/forms/selectionForms/RechercheReferentForm";
import DelRefForm from "../components/forms/deleteForms/DelRefFrom";
import UpdateRefForm from "../components/forms/updateForms/UpdateRefForm";
import DelOrganismeForm from "../components/forms/deleteForms/DelOrganismeFrom";
import UpdateOrganismeForm from "../components/forms/updateForms/UpdateOrganismeForm";
import UpdateOrganismeRefForm from "../components/forms/updateForms/UpdateOrganismeRefFrom";
import DesactiverOrganismeRefForm from "../components/forms/deleteForms/DesactiverOrganismeRefFrom";
import DelEmployeForm from "../components/forms/deleteForms/DelEmployeForm";
import UpdateEmployeForm from "../components/forms/updateForms/UpdateEmployeForm";
import RechercherFamilleForm from "../components/forms/selectionForms/RechercherFamilleForm";
import AddNoteForm from "../components/forms/addOrUpdateForms/AddNoteForm";
import DelNoteForm from "../components/forms/deleteForms/DelNoteForm";
import UpdateNoteForm from "../components/forms/updateForms/UpdateNoteForm";
import NoteForm from "../components/forms/basicForms/NoteForm";
import PointServiceSelectionForm from "../components/forms/selectionForms/PointServiceSelectionForm";
import AddServiceForm from "../components/forms/addOrUpdateForms/AddServiceForm";
import ServiceForm from "../components/forms/basicForms/ServiceForm";
import UpdateServiceForm from "../components/forms/updateForms/UpdateServiceForm";

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


  describe('DelNoteForm doit avoir un bouton', () => {
    it('Find the only button ', () => {
      const editor = shallow(< DelNoteForm />);
      expect(editor.find('Button').length).toEqual(0);
    });
  });

describe('DelOrganismeFrom doit avoir un bouton', () => {
  it('Find the only button ', () => {
    const editor = shallow(< DelOrganismeForm />);
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

/*----------------------------------------------------------------------*/

describe('AddEmployeForm ne crash pas', () => {
  it('AddEmployeForm affiche sans chash', () => {
  const wrapper = shallow(<AddEmployeForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('AddEmployeOrgaForm ne crash pas', () => {
  it('AddEmployeOrgaForm affiche sans chash', () => {
  const wrapper = shallow(<AddEmployeOrgaForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('AddNoteForm ne crash pas', () => {
  it('AddNoteForm affiche sans chash', () => {
  const wrapper = shallow(<AddNoteForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('AddOrganismeForm ne crash pas', () => {
  it('AddOrganismeForm affiche sans chash', () => {
  const wrapper = shallow(<AddOrganismeForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('AddOrgaRefForm ne crash pas', () => {
  it('AddOrgaRefForm affiche sans chash', () => {
  const wrapper = shallow(<AddOrgaRefForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('AddRefForm ne crash pas', () => {
  it('AddRefForm affiche sans chash', () => {
  const wrapper = shallow(<AddRefForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('AddServiceForm ne crash pas', () => {
  it('AddServiceForm affiche sans chash', () => {
  const wrapper = shallow(<AddServiceForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('EmployeForm ne crash pas', () => {
  it('EmployeForm affiche sans chash', () => {
  const wrapper = shallow(<EmployeForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('LoginForm ne crash pas', () => {
  it('LoginForm affiche sans chash', () => {
  const wrapper = shallow(<LoginForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('NoteForm ne crash pas', () => {
  it('NoteForm affiche sans chash', () => {
  const wrapper = shallow(<NoteForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('OrganismeForm ne crash pas', () => {
  it('OrganismeForm affiche sans chash', () => {
  const wrapper = shallow(<OrganismeForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('OrgaRefForm ne crash pas', () => {
  it('OrgaRefForm affiche sans chash', () => {
  const wrapper = shallow(<OrgaRefForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('RefForm ne crash pas', () => {
  it('RefForm affiche sans chash', () => {
  const wrapper = shallow(<RefForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('ServiceForm ne crash pas', () => {
  it('ServiceForm affiche sans chash', () => {
  const wrapper = shallow(<ServiceForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('DelEmployeForm ne crash pas', () => {
  it('DelEmployeForm affiche sans chash', () => {
  const wrapper = shallow(<DelEmployeForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('DelNoteForm ne crash pas', () => {
  it('DelNoteForm affiche sans chash', () => {
  const wrapper = shallow(<DelNoteForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('DelOrganismeForm ne crash pas', () => {
  it('DelOrganismeForm affiche sans chash', () => {
  const wrapper = shallow(<DelOrganismeForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('DelRefForm ne crash pas', () => {
  it('DelRefForm affiche sans chash', () => {
  const wrapper = shallow(<DelRefForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('DesactiverOrganismeRefForm ne crash pas', () => {
  it('DesactiverOrganismeRefForm affiche sans chash', () => {
  const wrapper = shallow(<DesactiverOrganismeRefForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('PointServiceSelectionForm ne crash pas', () => {
  it('PointServiceSelectionForm affiche sans chash', () => {
  const wrapper = shallow(<PointServiceSelectionForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('RechercheReferentForm ne crash pas', () => {
  it('RechercheReferentForm affiche sans chash', () => {
  const wrapper = shallow(<RechercheReferentForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('RechercherFamilleForm ne crash pas', () => {
  it('RechercherFamilleForm affiche sans chash', () => {
  const wrapper = shallow(<RechercherFamilleForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('UpdateEmployeForm ne crash pas', () => {
  it('UpdateEmployeForm affiche sans chash', () => {
  const wrapper = shallow(<UpdateEmployeForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('UpdateNoteForm ne crash pas', () => {
  it('UpdateNoteForm affiche sans chash', () => {
  const wrapper = shallow(<UpdateNoteForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('UpdateOrganismeForm ne crash pas', () => {
  it('UpdateOrganismeForm affiche sans chash', () => {
  const wrapper = shallow(<UpdateOrganismeForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('UpdateOrganismeRefForm ne crash pas', () => {
  it('UpdateOrganismeRefForm affiche sans chash', () => {
  const wrapper = shallow(<UpdateOrganismeRefForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('UpdateRefForm ne crash pas', () => {
  it('UpdateRefForm affiche sans chash', () => {
  const wrapper = shallow(<UpdateRefForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

describe('UpdateServiceForm ne crash pas', () => {
  it('UpdateServiceForm affiche sans chash', () => {
  const wrapper = shallow(<UpdateServiceForm />);
  expect(wrapper).toMatchSnapshot();
  });
  });

/*----------------------------------------------------------------------*/

describe('EmployePage ne crash pas', () => {
  it('EmployePage affiche sans chash', () => {
    shallow(<EmployePage />);
  });
  });

describe('AddEmployePage ne crash pas', () => {
  it('AddEmployePage affiche sans chash', () => {
    shallow(<AddEmployePage />);
  });
  });

describe('OrgaRefPage ne crash pas', () => {
  it('OrgaRefPage affiche sans chash', () => {
    shallow(<OrgaRefPage />);
  });
  });

describe('OrgaRefSelectionPage ne crash pas', () => {
  it('OrgaRefSelectionPage affiche sans chash', () => {
    shallow(<OrgaRefSelectionPage />);
  });
  });

describe('AddOrgaRefPage ne crash pas', () => {
  it('AddOrgaRefPage affiche sans chash', () => {
    shallow(<AddOrgaRefPage />);
  });
  });

describe('AddRefPage ne crash pas', () => {
  it('AddRefPage affiche sans chash', () => {
    shallow(<AddRefPage />);
  });
  });

describe('RefPage ne crash pas', () => {
  it('RefPage affiche sans chash', () => {
    shallow(<RefPage />);
  });
  });

describe('OrganismePage ne crash pas', () => {
  it('OrganismePage affiche sans chash', () => {
    shallow(<OrganismePage />);
  });
  });

describe('AddOrganismePage ne crash pas', () => {
  it('AddOrganismePage affiche sans chash', () => {
    shallow(<AddOrganismePage />);
  });
  });

describe('AddEmployeOrgaPage ne crash pas', () => {
  it('AddEmployeOrgaPage affiche sans chash', () => {
    shallow(<AddEmployeOrgaPage />);
  });
  });

describe('RechercheReferentPage ne crash pas', () => {
  it('RechercheReferentPage affiche sans chash', () => {
    shallow(<RechercheReferentPage />);
  });
  });

describe('DelRefPage ne crash pas', () => {
  it('DelRefPage affiche sans chash', () => {
    shallow(<DelRefPage />);
  });
  });

describe('UpdateRefPage ne crash pas', () => {
  it('UpdateRefPage affiche sans chash', () => {
    shallow(<UpdateRefPage />);
  });
  });

describe('AddEmployePage ne crash pas', () => {
  it('AddEmployePage affiche sans chash', () => {
    shallow(<AddEmployePage />);
  });
  });

describe('DelOrganismePage ne crash pas', () => {
  it('DelOrganismePage affiche sans chash', () => {
    shallow(<DelOrganismePage />);
  });
  });

describe('UpdateOrganismePage ne crash pas', () => {
  it('UpdateOrganismePage affiche sans chash', () => {
    shallow(<UpdateOrganismePage />);
  });
  });

describe('UpdateOrganismeRefPage ne crash pas', () => {
  it('UpdateOrganismeRefPage affiche sans chash', () => {
    shallow(<UpdateOrganismeRefPage />);
  });
  });

describe('DesactiverOraganismeRefPage ne crash pas', () => {
  it('DesactiverOraganismeRefPage affiche sans chash', () => {
    shallow(<DesactiverOraganismeRefPage />);
  });
  });

describe('DelEmployePage ne crash pas', () => {
  it('DelEmployePage affiche sans chash', () => {
    shallow(<DelEmployePage />);
  });
  });

describe('UpdateEmployePage ne crash pas', () => {
  it('UpdateEmployePage affiche sans chash', () => {
    shallow(<UpdateEmployePage />);
  });
  });

describe('RechercherFamillePage ne crash pas', () => {
  it('RechercherFamillePage affiche sans chash', () => {
    shallow(<RechercherFamillePage />);
  });
  });

describe('AddNotePage ne crash pas', () => {
  it('AddNotePage affiche sans chash', () => {
    shallow(<AddNotePage />);
  });
  });

  describe('DelNotePage ne crash pas', () => {
    it('DelNotePage affiche sans chash', () => {
      shallow(<DelNotePage />);
    });
    });

  describe('UpdateNotePage ne crash pas', () => {
    it('UpdateNotePage affiche sans chash', () => {
      shallow(<UpdateNotePage />);
    });
    });

  describe('NotePage ne crash pas', () => {
    it('NotePage affiche sans chash', () => {
      shallow(<NotePage />);
    });
    });

  describe('PointServiceSelectionPage ne crash pas', () => {
    it('PointServiceSelectionPage affiche sans chash', () => {
      shallow(<PointServiceSelectionPage />);
    });
    });

  describe('AddServicePage ne crash pas', () => {
    it('AddServicePage affiche sans chash', () => {
      shallow(<AddServicePage />);
    });
    });

  describe('ServicePage ne crash pas', () => {
    it('ServicePage affiche sans chash', () => {
      shallow(<ServicePage />);
    });
    });
