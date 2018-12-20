import React, {Component} from 'react';
import axios from "axios";
import ItemList from "../BookEditor/ItemList";

class InstitutionDetails extends Component {
    state = {
        data: {},
        instbooks: [],
        books: [],
        selectedNewBook: {}

    }

    getInstitutionDetails = () => {
        axios.get("/api/" + this.props.type + "/" + this.props.match.params.id)
            .then(response => {
                this.setState({data: response.data});
            });

        axios.get("/api/" + this.props.type + "/" + this.props.match.params.id + "/books")
            .then(response => {
                this.setState({instbooks: response.data});
            })
    }

    componentDidMount() {
        this.getInstitutionDetails();
        this.refreshBooksData();
    }


    refreshBooksData = () => {
        axios.get("/api/books")
            .then(result => {
                    // let availableBooks = result.data.filter( (value, index, arr) => {
                    //
                    //     return this.state.instbooks.contains(value);
                    // });
                    let availableBooks = result.data;
                    this.setState({books: availableBooks})
                }
            );

    }

    handleChangeSelectedBook = (event) => {
        this.setState({selectedNewBook: event.target.value});

    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/" + this.props.type + "/" + this.state.data.code + "/books/" + this.state.selectedNewBook)
            .finally(() => {
                this.getInstitutionDetails();
            })
    };

    render() {
        return (
            <div>
                <h3>{this.state.data.name}</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <h4>Details</h4>
                        Type: {this.props.type.toUpperCase()}<br/>
                        Name: {this.state.data.name} <br/>
                        Code: {this.state.data.code} <br/>
                        Size: {this.props.type == "library" ? this.state.data.librarySize : ""}{this.props.type == "bookshop" ? this.state.data.bookshopSize : ""}
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit} className="mt-3" style={{width: "300px"}}>
                            <h4>Add Book Form</h4>
                            <div className="form-group">
                                <select className="form-control" onChange={this.handleChangeSelectedBook}>
                                    {this.state.books.map(book => <option value={book.isbn}>{book.title}</option>)}
                                </select>
                            </div>
                            <input type="submit" value="Add"/>
                        </form>
                    </div>
                </div>
                <h4 className="mt-3"> Books in this institution:</h4>
                <ItemList itemsToShow={this.state.instbooks}/>
            </div>
        );
    }
}

export default InstitutionDetails;