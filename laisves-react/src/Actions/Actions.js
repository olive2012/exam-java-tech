import React, {Component} from 'react';

class Actions extends Component {
    onClickHandler = () => {
        window.alert("Not implemented yet.");
    }

    render() {
        return (
            <div>
                 <h3>Actions</h3>

                        <button onClick={this.onClickHandler} type="button" className="btn btn-success mt-2">
                            Add book to an institution
                        </button>
                        <br/>
                        <button onClick={this.onClickHandler} type="button" className="btn btn-success mt-2">
                            Delete book from an institution
                        </button>
                        <br/>
                        <button onClick={this.onClickHandler} type="button" className="btn btn-success mt-2">
                            Add new book
                        </button>
                        <br/>
                        <button onClick={this.onClickHandler} type="button" className="btn btn-success mt-2">Add
                            new institution
                        </button>
            </div>
        );
    }
}

export default Actions;