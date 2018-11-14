import React from 'react';
import PropTypes from "prop-types";
import { Table, Message, Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import InlineError from "../../messages/InlineError";
export default class OrganismeForm extends React.Component{
    state ={
        organismes:[],
        info:{
            id:"",
            type:""
        },
        errors:{}
    };

    componentDidMount(){
        axios.get('/organismes').then(res => {
            this.setState({organismes:res.data});
        });
    }
    setIdOrga = event =>{
        var tab=event.target.value.split(' ');
        this.setState({info:{id: tab[0],type:tab[1]}});

    }
    onSubmit = ()=>{
        const errors = this.validate(this.state.info);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
        this.props.submit(this.state.info).catch(err => ({errors:err.response.info.errors}));
        }
    }
    validate = (info)=> {
        const errors={};
        if(!info.id) errors.id = "Aucune Option n'a été choisie";
        return errors;
    }

    render(){
        const { errors } = this.state;
        var i =0;
        return(
            <div>{errors.id && 
                <Message negative>
                <Message.Header><InlineError text={errors.id}/></Message.Header>
                </Message>}
          <Table celled padded>
              <Table.Header>
              <Table.Row>
                  <Table.HeaderCell singleLine>Nom</Table.HeaderCell>
                  <Table.HeaderCell>Nom organisme</Table.HeaderCell>
                  <Table.HeaderCell>Télephone Bureau</Table.HeaderCell>
                  <Table.HeaderCell>Fax</Table.HeaderCell>
                  <Table.HeaderCell>Courriel</Table.HeaderCell>
                  <Table.HeaderCell>Options</Table.HeaderCell>
              </Table.Row>
              </Table.Header>

              <Table.Body>
                    {this.state.organismes.map(organisme =>
                        <Table.Row key={organisme.noOrganisme}>
                            <Table.Cell>{organisme.noOrganisme}</Table.Cell>
                            <Table.Cell>{organisme.nom}</Table.Cell>
                            <Table.Cell>{organisme.telephone}</Table.Cell>
                            <Table.Cell>{organisme.fax}</Table.Cell>
                            <Table.Cell>{organisme.courriel}</Table.Cell>
                            <Table.Cell>
                                <Form key={i++} onSubmit={this.onSubmit}>
                                    {errors.global && <Message negative>
                                    <Message.Header>Erreur</Message.Header>
                                    <p>{errors.global}</p>
                                    </Message>}
                                    
                                    <Form.Group widths='equal'>
                                        <Form.Field error={!!errors.id} control='select' onChange={this.setIdOrga}>
                                            <option>Choisir..</option>
                                            <option value={organisme.noOrganisme+' pointService'}>Ajouter un point de service</option>
                                            <option value={organisme.noOrganisme+' employe'}>Ajouter un employe</option>
                                            <option value={organisme.noOrganisme+' modif'}>Modifier</option>
                                            <option value={organisme.noOrganisme+' sup'}>Supprimer</option>
                                        </Form.Field>
                                        <Button key={i++} size='mini' compact primary>Valider</Button>
                                    </Form.Group>
                                </Form>  
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            </div>
        )
    }
}
OrganismeForm.propTypes = {
    submit: PropTypes.func.isRequired
}
