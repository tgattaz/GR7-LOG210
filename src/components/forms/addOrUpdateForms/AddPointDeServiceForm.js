import React from 'react';
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class AddPointDeServiceForm extends React.Component{
    state ={
        pointDeService:{
            nom:'',
            noCivique:'',
            rue:'',
            ville:'',
            province:'',
            codePostal:'',
            telephone:'',
            fax:'',
            courriel:'',
            idOrga: this.props.noOrganisme
        }
    };

    handleChangeNom = event =>{
        this.setState({pointDeService:{nom:event.target.value}});
    };
    handleChangeNoCivique = event =>{
        this.setState({pointDeService:{noCivique:event.target.value}});
    };
    handleChangeRue = event =>{
        this.setState({pointDeService:{rue:event.target.value}});
    };
    handleChangeVille = event =>{
        this.setState({pointDeService:{ville:event.target.value}});
    };
    handleChangeProvince = event =>{
        this.setState({pointDeService:{province:event.target.value}});
    };
    handleChangeCodePostal = event =>{
        this.setState({pointDeService:{codePostal:event.target.value}});
    };
    handleChangeTelephone = event =>{
        this.setState({pointDeService:{telephone:event.target.value}});
    };
    handleChangeCourriel = event =>{
        this.setState({pointDeService:{courriel:event.target.value}});
    };
    handleChangeFax = event =>{
        this.setState({pointDeService:{fax:event.target.value}});
    };
    onChange= e=> this.setState({
    pointDeService:{...this.state.pointDeService,[e.target.name]: e.target.value}
    });
    onSubmit = () =>{
       
        this.props.submit(this.state.pointDeService);
    }

    render(){
        return(
          <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <label>
                    Nom du point de service:
                    <input type="text" name="nom" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Numéro Civique:
                    <input type="text" name="noCivique" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Rue:
                    <input type="text" name="rue" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Ville:
                    <input type="text" name="ville" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Province:
                    <input type="text" name="province" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Code Postal:
                    <input type="text" name="codePostal" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Télephone:
                    <input type="text" name="telephone" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Fax:
                    <input type="text" name="fax" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Courriel:
                    <input type="text" name="courriel" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Button primary>Enregistrer</Button>
          </Form>
        );
    }
}
AddPointDeServiceForm.protoTypes ={
    noOrganisme: PropTypes.number.isRequired
  }
  function mapStateToProps(state){
    return {
        noOrganisme:state.organisme.noOrganisme
    }
  }
export default connect(mapStateToProps)(AddPointDeServiceForm);
