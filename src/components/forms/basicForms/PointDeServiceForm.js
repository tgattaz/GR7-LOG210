import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Form ,Button } from 'semantic-ui-react';
import axios from 'axios';

class PointDeServiceForm extends React.Component{
    state={
        pointsDeService:[],
        idOrga:this.props.noOrganisme,
        nomOrga:this.props.nom
    }

    componentDidMount(){
        axios.get('/pointsDeService',{ params:{id:this.state.idOrga}}).then(res => {
            console.log(res.data);
            this.setState({pointsDeService:res.data});
        });
    }
    onSubmit = ()=>{
        this.props.submit(this.state.idOrga);
    }
    render(){
        return(
        <div>
            <Form floated='right' onSubmit={this.onSubmit}>
                <Form.Field>
                    <Button floated='right' compact primary >Ajouter</Button>
                </Form.Field>
            </Form>
            <br/>
            <Table celled padded>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Numéro Employe</Table.HeaderCell>
                    <Table.HeaderCell>Nom</Table.HeaderCell>
                    <Table.HeaderCell>Num civique</Table.HeaderCell>
                    <Table.HeaderCell>Rue</Table.HeaderCell>
                    <Table.HeaderCell>ville</Table.HeaderCell>
                    <Table.HeaderCell>Télephone</Table.HeaderCell>
                    <Table.HeaderCell>Courriel</Table.HeaderCell>
                    <Table.HeaderCell>Fax</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {this.state.pointsDeService!=='' && this.state.pointsDeService.map(point =>
                <Table.Row key={point.noPointDeService}>
                    <Table.Cell>{point.noPointDeService}</Table.Cell>
                    <Table.Cell>{point.nom}</Table.Cell>
                    <Table.Cell>{point.noCivique}</Table.Cell>
                    <Table.Cell>{point.rue}</Table.Cell>
                    <Table.Cell>{point.ville}</Table.Cell>
                    <Table.Cell>{point.telephone}</Table.Cell>
                    <Table.Cell>{point.courriel}</Table.Cell>
                    <Table.Cell>{point.fax}</Table.Cell>
                </Table.Row>
                )}
                </Table.Body>
            </Table>
        </div>);
    }
}

PointDeServiceForm.protoTypes ={
    noOrganisme: PropTypes.number.isRequired,
    nom:PropTypes.string.isRequired
  }
  function mapStateToProps(state){
    return {
        noOrganisme:state.organisme.noOrganisme,
        nom:state.organisme.nom
    }
  }

  export default connect(mapStateToProps)(PointDeServiceForm);