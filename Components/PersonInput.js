
import React from 'react'
import axios from 'axios';

export default class PersonInput extends React.Component {
    state = {
        name: '',
    };

    handleChange = event => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.group(res.data)
            })
    }
  
    
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit" >Click me</button>
            </form>
        </div>
      );
    }
  }
