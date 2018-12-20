//presentation
import React, {Component} from 'react';
import Notification from "../Notification/Notification";

class InstitutionList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 border">
                <h3>Libraries</h3>
                        {this.props.libraries.length < 5 ?
                            <Notification>Not enough libraries!</Notification> : ""}
                        <table className="table table-striped">

                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Size</th>
                                <th>Reading Hall</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.libraries.map(item =>
                                <tr>
                                    <td>
                                        <a href={"/library/" + item.code}>
                                            {item.name}
                                        </a>
                                    </td>
                                    <td>{item.code}</td>
                                    <td><span className="badge badge-secondary">{item.librarySize} </span></td>
                                    <td>{item.hasReadingHall ? "📖" : "-"}</td>
                                    <td>
                                        <button className="btn btn-success mt-2"
                                                onClick={() => this.props.deleteLibraryHandler(item.code)}>Delete
                                        </button>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                </div>
                <div className="col-lg-6 border">

                        <h3>Bookshops</h3>
                        {this.props.bookshops.length < 5 ?
                            <Notification>Not enough bookshops!</Notification> : ""}

                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Size</th>
                                <th>Accept cards</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.bookshops.map(item =>
                                <tr>
                                   <td>
                                        <a href={"/bookshop/" + item.code}>
                                            {item.name}
                                        </a>
                                    </td>
                                    <td>{item.code}</td>
                                    <td><span className="badge badge-secondary">{item.bookshopSize}</span></td>
                                    <td>{item.acceptsCards ? "💳" : "-"}</td>
                                    <td>
                                        <button className="btn btn-success mt-2"
                                                onClick={() => this.props.deleteBookShopHandler(item.code)}>Delete
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