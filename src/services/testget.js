import React from 'react';
import axios from 'axios';

export default class Testget extends React.Component{
    state ={
        roles:[],
    };

    componentDidMount(){
        axios.get('/roles').then(res => {
            console.log(res);
            this.setState({roles:res.data});
        });
    }

    render(){
        return(
            <ul>
                {this.state.roles.map(role => <li>{role.nomRole}</li>)}
            </ul>
        )
    }
}