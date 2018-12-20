import React, {Component} from 'react';
import axios from "axios";
import ItemList from "../CountryEditor/ItemList";

class InstitutionDetails extends Component {
    state = {
        title: {},
        desc: {},
        image: {},
        instbooks: [],
        countries: [],
        selectedNewCountry: {}

    }

    getHolidayDetails = () => {
        axios.get("/api/" + this.props.type + "/" + this.props.match.params.id)
            .then(response => {
                this.setState({data: response.data});
            });

        axios.get("/api/" + this.props.type + "/" + this.props.match.params.id + "/country")
            .then(response => {
                this.setState({instbooks: response.data});
            })
    }

    componentDidMount() {
        this.getHolidayDetails();
        this.refreshCountryData();
    }


    refreshCountryData = () => {
        axios.get("/api/country")
            .then(result => {

                    let holidayInCountry = result.data;
                    this.setState({books: holidayInCountry})
                }
            );

    }

    handleChangeSelectedCountry = (event) => {
        this.setState({selectedNewCountry: event.target.value});

    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/" + this.props.type + "/" + this.state.data.code + "/country/" + this.state.selectedNewCountry)
            .finally(() => {
                this.getInstitutionDetails();
            })
    };

    render() {
        return (
            <div>
                <h3>{this.state.data.title}</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <h4>Details</h4>

                        Title: {this.state.data.title} <br/>

                        {/*Size: {this.props.type == "holiday" ? this.state.data.holidaySize : ""}{this.props.type == "bookshop" ? this.state.data.bookshopSize : ""}*/}
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit} className="mt-3" style={{width: "300px"}}>
                            <h4>Add Book Form</h4>
                            <div className="form-group">
                                <select className="form-control" onChange={this.handleChangeSelectedBook}>
                                    {this.state.country.map(country => <option value={country.name}>{country.name}</option>)}
                                </select>
                            </div>
                            <input type="submit" value="Add"/>
                        </form>
                    </div>
                </div>
                <h4 className="mt-3"> Books in this institution:</h4>
                {/*<ItemList itemsToShow={this.state.instbooks}/>*/}
            </div>
        );
    }
}

export default InstitutionDetails;