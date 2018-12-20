//presentation
import React, {Component} from 'react';
import Notification from "../Notification/Notification";

class InstitutionList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 border">



                        <h3>Holidays</h3>
                        {this.props.holidays.length < 5 ?
                            <Notification>Not enough holidays!</Notification> : ""}

                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Flag</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.holidays.map(item =>
                                <tr>
                                   <td>
                                        <a href={"/holiday/" + item.title}>
                                            {item.title}
                                        </a>
                                    </td>
                                    <td>{item.description}</td>
                                    <td><span className="badge badge-secondary">{item.image}</span></td>
                                    <td>{item.Flag ? "Yes" : "No"}</td>
                                    <td>
                                        <button className="btn btn-success mt-2"
                                                onClick={() => this.props.deleteHolidayHandler(item.code)}>Delete
                                        </button>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
}

export default InstitutionList;