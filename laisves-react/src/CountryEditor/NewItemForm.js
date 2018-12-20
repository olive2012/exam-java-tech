import React, {Component} from 'react';
import axios from 'axios';


class NewItemForm extends Component {
    constructor() {
        super();
        this.state = this.emptyState;

    }

    emptyState = {
        name: "",
        president: "",
        image: ""
    }


    handleChangeName = (event) => this.setState({name: event.target.value});
    handleChangePresident = (event) => this.setState({president: event.target.value});
    handleChangeImage = (event) => this.setState({image: event.target.value});


    handleSubmit = (event) => {

        event.preventDefault();
        console.log(this.state);
        const newItem = {...this.state};

        console.log(newItem);

        axios.post('http://localhost:8080/api/country', newItem)
            .then(response => {
                console.log(response);
                this.setState(this.emptyState);

            })
            .catch(error => {
                window.alert("Nepavyko. Klaida: " + error);
            });


    };

    render() {
        return (
            <div className="App container-fluid">
                <form onSubmit={this.handleSubmit}>
                    <h4>New Country Form</h4>
                    Name({this.state.isbn}):<br/>
                    <input type="text" value={this.state.name}
                           onChange={this.handleChangeNamew}/><br/>

                    President ({this.state.president}):<br/>
                    <input type="text" value={this.state.president}
                           onChange={this.handleChangePresident}/><br/>

                    Image ({this.state.image}):<br/>
                    <input type="text" value={this.state.image}
                           onChange={this.handleChangeImage}/><br/>


                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

export default NewItemForm