import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../../messages/InlineError";

class LoginForm extends React.Component{
    state = {
        data: {
            prenom:"",
            password:""
        },
        loading: false,
        errors:{}
        
    }

    onChange = e => this.setState({
        data:{ ...this.state.data,[e.target.name]: e.target.value}
    });

    onSubmit=()=>{
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
            this.setState({ loading : true})
            this.props
            .submit(this.state.data)
            .catch(err => this.setState({ errors: err.response.data.errors, loading:false}));
        }
    }

    validate = (data) => {
        const errors = {};
        console.log();
        if(Validator.isEmpty(data.prenom)) errors.prenom = "Utilisateur invalide";
        if(!data.password) errors.password = "Can't be blank";
        return errors;
    }

    render(){
        const { data, errors ,loading}=this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
            {errors.global && <Message negative>
            <Message.Header>Erreur</Message.Header>
            <p>{errors.global}</p>
            </Message>}
                <Form.Field error={!!errors.prenom}>
                    <label htmlFor="prenom">Prenom</label>
                    <input type='text' id='prenom' name='prenom' value={data.prenom} onChange={this.onChange} />
                    {errors.prenom && <InlineError text={errors.prenom}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Mot de passe</label>
                    <input type='password' id='password' name='password' value={data.password} onChange={this.onChange} />
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;