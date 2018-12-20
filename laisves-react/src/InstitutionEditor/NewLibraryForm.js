import React, {Component} from 'react';
import axios from 'axios';


class NewLibraryForm extends Component {
    constructor() {
        super();
        this.state = this.emptyState;
    }

    emptyState = {
        code: "",
        name: "",
        librarySize: "",
        hasReadingHall: ""
    }

    handleChangeCode = (event) => this.setState({code: event.target.value});
    handleChangeName = (event) => this.setState({name: event.target.value});
    handleChangeLibrarySize = (event) => this.setState({librarySize: event.target.value});
    handleChangeHasReadingHall = (event) => this.setState({ hasReadingHall: event.target.checked});


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const newLibrary = {...this.state};

        console.log(newLibrary);

        axios.post('/api/library', newLibrary)
            .then(response => {
                console.log(response);
                this.setState(this.emptyState);

            })
            .catch(error => {
                window.alert("Nepavyko. Klaida: " + error);
            });

    };

    sizeOptions = ['NATIONAL','STATE','CITY','COUNTY','TOWN'];

    render() {
        return (
            <div className="App container-fluid">
                <div className="form-group row">
                    <div className="col-sm-6">
                        <form onSubmit={this.handleSubmit}>
                            <h4>New Library Form</h4>
                            Code ({this.state.code}):<br/>
                            <input className="form-control" type="text" value={this.state.code}
                                   onChange={this.handleChangeCode}/><br/>

                            Name ({this.state.name}):<br/>
                            <input className="form-control" type="text" value={this.state.name}
                                   onChange={this.handleChangeName}/><br/>

                            {/*Library Size (Options - NATIONAL/STATE/CITY/COUNTY/TOWN) ({this.state.librarySize}):<br/>*/}
                            {/*<input className="form-control" type="text" value={this.state.librarySize}*/}
                                   {/*onChange={this.handleChangeLibrarySize}/><br/>*/}


                            <select className="form-control" onChange={this.handleChangeLibrarySize}>
                                {this.sizeOptions.map(size => <option value={size}>{size}</option>)}

                            </select>
                            Has Reading Hall? ({this.state.hasReadingHall ? "true" : "false"})
                            <input className="form-control" type="checkbox" checked={this.state.hasReadingHall}
                                   onChange={this.handleChangeHasReadingHall}/><br/>

                            <input type="submit" value="Save"/>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default NewLibraryForm

//
// < select
// className = "form-control"
// id = "exampleFormControlSelect1" >
//     < option > 1 < /option>
// <option>2</option>
// < option > 3 < /option>
// <option>4</option>
// < option > 5 < /option>
// </select>

