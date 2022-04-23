import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.name}</td>
        <td>{props.user.age}</td>
    </tr>
)

export default class UsersList extends Component{
    constructor(props){
        super(props);
        this.state = {users: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({ users: response.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    userList(){
        return this.state.users.map(currentuser => {
            return <User user={currentuser} key={currentuser._id} />;
        })
    }

    render(){
        return(
            <div>
                <h3>Logged Users</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userList() }
                    </tbody>
                </table>  
            </div>
        );
    }
}