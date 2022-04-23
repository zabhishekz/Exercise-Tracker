import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component{
    constructor(props){
        super(props);   

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            username: '',
            name: '',
            age: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            name: this.state.name,
            age: this.state.age,
        };

        console.log(newUser);

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));
        
        this.setState({
            username: '',
            name: '',
            age: ''
        })
    }

    render(){
        return(
            <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />
                </div>
                <div className="form-group">
                    <label>Age (in years): </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
            </div>
        );
    }
}