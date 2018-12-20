import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import ItemList from "./BookEditor/ItemList";
import Item from "./BookEditor/Item";
import Notification from "./Notification/Notification";
import Visual1 from "./Visual1/Visual1";
import InstitutionList from "./InstitutionEditor/InstitutionList";
import Actions from "./Actions/Actions";

// import {Doughnut} from 'react-chartjs-2';

class App extends Component {
    state = {
        books: [],
        libraries: [],
        bookshops: []
    }

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {
        axios.get("/api/books")
            .then(result => {
                    this.setState({books: result.data})
                }
            );

        axios.get("/api/library")
            .then(result => {
                    this.setState({libraries: result.data})
                }
            );

        axios.get("/api/bookshop")
            .then(result => {
                    this.setState({bookshops: result.data})
                }
            );

    }

    deleteBook = (isbn) => {
        axios.delete("api/books/" + isbn)
            .then(() => {
                this.refreshData()
            })
    }

    deleteBookShop = (code) => {
        axios.delete("api/bookshop/" + code)
            .then(() => {
                this.refreshData()
            })
    }


    deleteLibrary = (code) => {
        axios.delete("api/library/" + code)
            .then(() => {
                this.refreshData()
            })
    }


    render() {
        return (
            <div className="App container-fluid p-3 m-1">
                <div>
                    <div className="jumbotron jumbotron-fluid">
                        <h1 className="display-4">Book institutions' administration service </h1>
                        <p className="lead">Welcome.</p>
                    </div>
                </div>


                {/*<div className="row">*/}
                {/*<div className="col-12 border border-success m-3">*/}
                <InstitutionList
                    libraries={this.state.libraries}
                    bookshops={this.state.bookshops}
                    deleteBookShopHandler={this.deleteBookShop}
                    deleteLibraryHandler={this.deleteLibrary}/>
                {/*</div>*/}

                {/*<div className="col-4 border border-success">*/}
                {/*<Actions/>*/}

                {/*</div>*/}


                {/*</div>*/}

                <div className="row pt-5">
                    <h3>Book List</h3>

                    <div className="col-sm-12">
                        <ItemList itemsToShow={this.state.books} deleteHandler={this.deleteBook}/>
                    </div>


                </div>
                <div>
                    <Visual1 books={this.state.books}/>
                </div>
            </div>


        );
    }


}

export default App;
