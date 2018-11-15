import React from 'react';
import PropTypes from "prop-types";
import { Table, Form } from 'semantic-ui-react';
import axios from 'axios';

export default class PointDeServiceForm extends React.Component{
    state={
        pointsDeService:[],
        idOrga:'',
        nomOrga:''
    }
    componentDidMount(){
        axios.get('/pointsDeService').then(res => {
            this.setState({pointsDeService:res.data});
        });
    }
    render(){
        const idOrga=this.props.noOrganisme;
        return(
        <div>
            <Form>
                <Form.Field>
                    <input type="hidden" name="idOrga" value={idOrga} />
                </Form.Field>
            </Form>
            <p>test</p>
        </div>);
    }
}