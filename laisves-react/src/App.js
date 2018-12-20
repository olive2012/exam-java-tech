import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import ItemList from "./CountryEditor/ItemList";
import Notification from "./Notification/Notification";
import Visual1 from "./Visual1/Visual1";
import InstitutionList from "./HolidayEditor/InstitutionList";


// import {Doughnut} from 'react-chartjs-2';

class App extends Component {
    state = {
        countries: [],
        holidays: []
    }

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {
        axios.get("/api/country")
            .then(result => {
                    this.setState({counties: result.data})
                }
            );


        axios.get("/api/holiday")
            .then(result => {
                    this.setState({holidays: result.data})
                }
            );

    }

    deleteCountry = (name) => {
        axios.delete("api/country/" + name)
            .then(() => {
                this.refreshData()
            })
    }

    deleteHoliday = (title) => {
        axios.delete("api/holiday/" + title)
            .then(() => {
                this.refreshData()
            })
    }


    render() {
        return (
            <div className="App container-fluid p-3 m-1">
                <div>
                    <div className="jumbotron jumbotron-fluid">
                        <h1 className="display-4">Holidays administration service </h1>
                        <p className="lead">Welcome.</p>
                    </div>
                </div>


                {/*<div className="row">*/}
                {/*<div className="col-12 border border-success m-3">*/}
                <InstitutionList
                    holidays={this.state.holidays}
                    deleteBookShopHandler={this.deleteHoliday}/>


                <div className="row pt-5">
                    <h3>Countries List</h3>

                    <div className="col-sm-12">
                        <ItemList itemsToShow={this.state.counties} deleteHandler={this.deleteCountry}/>
                    </div>


                </div>
                <div>
                    <Visual1 countries={this.state.countries}/>
                </div>
            </div>


        );
    }


}

export default App;
