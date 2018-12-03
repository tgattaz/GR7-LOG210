import React from 'react';
import { Table,Button } from 'semantic-ui-react';
import axios from 'axios';
import AddServiceForm from '../addOrUpdateForms/AddServiceForm';
export default class ServiceForm extends React.Component {
  state = {
    services: [],
    noService: "",
    modifierService: false,
    ModifierService:{},
  };
  delService = e => {
    e.preventDefault();
    alert(e.target.value);
    this.setState({
      noService: e.target.value
    });
    alert(`Vous avez effacer le service avec le numero : ${e.target.value}`);

    const selection = {
      noService: e.target.value
    };
    axios
      .post("/delService", {
        selection
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      
      this.componentDidMount();
  };
  UpdateService = e => {
    e.preventDefault();
    alert(`Vous aller modifier le service avec le numero : ${e.target.value}`);
    this.setState({
      noService: e.target.value,
      modifierService : true
    });
  
  };
  handleChangeValue = e =>{this.setState({
    modifierService: false,
    ModifierService: null
  })

  this.componentDidMount();
} ;

  componentDidMount() {
    axios.get('/services').then(res => {
      this.setState({ services: res.data });
    }).catch(e=>{
      console.log(e);
    });
  }

  render() {
    let ModifierService
    
    if(this.state.modifierService)
        {
          let modifierService = this.state.noService
          ModifierService =  <div><h2>numero : {modifierService}</h2> <AddServiceForm noServiceAModifier={this.state.noService} onChangeValue={this.handleChangeValue}/> </div>      
        }
    return (
      <div>
        <h2>Modifier service </h2>
         {ModifierService}
        
        
<Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>#</Table.HeaderCell>
            <Table.HeaderCell>nom du service</Table.HeaderCell>
            <Table.HeaderCell>Tarification pour le parent</Table.HeaderCell>
            <Table.HeaderCell>Tarification subventionnée</Table.HeaderCell>
            <Table.HeaderCell>Tarification pour le CISS</Table.HeaderCell>
            <Table.HeaderCell>État du service</Table.HeaderCell>
            <Table.HeaderCell>Ajuster</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.services.map(service => (
            <Table.Row key={service.noService}>
              <Table.Cell>{service.noService}</Table.Cell>
              <Table.Cell>{service.nomService}</Table.Cell>
              <Table.Cell>{service.tarificationParent}</Table.Cell>
              <Table.Cell>{service.tarificationSubventionnee}</Table.Cell>
              <Table.Cell>{service.tarificationCiss}</Table.Cell>
              <Table.Cell>{service.etatDuService}</Table.Cell>
              <Table.Cell>
                {
                  <div>
                     <Button color="red" value={service.noService} onClick={e => this.delService(e)}>
                  <i class="eraser icon"></i>
                  </Button>
                   <Button color="green" value={service.noService} onClick={e => this.UpdateService(e)}>
                   <i class="edit icon"></i>
                   </Button>
                  </div>
                   
                }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>)
    
    ;
  }
}