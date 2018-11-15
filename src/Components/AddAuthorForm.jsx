import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const AddAuthorForm = ({match, onAddAuthor}) => (
    <div className="fluid-container">
        <div className="col-10 offset-1">
            <h1>Add Author</h1>
            <AuthorForm onAddAuthor={onAddAuthor}/>
        </div>
    </div>
);

class AuthorForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
    }

    onFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    };

    handleBookAddition = event => {
        event.preventDefault();
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onFieldChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" className="form-control" value={this.state.imageUrl} onChange={this.onFieldChange}/>
                </div>
                <div className="form-group">
                    {this.state.books.map(book => <p key={book}>{book}</p>)}
                    <label htmlFor="bookTemp">Books: &nbsp;</label>
                    <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}/>
                    &nbsp;
                    <button className="btn btn-primary" onClick={this.handleBookAddition}>+</button>
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onAddAuthor: (author) => {
            dispatchEvent({ type: 'ADD_AUTHOR', author });
            props.history.push('/');
        }
    }
};

export default withRouter(connect((state) => state, mapDispatchToProps)(AddAuthorForm));