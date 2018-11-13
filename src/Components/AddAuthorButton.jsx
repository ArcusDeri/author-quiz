import React from 'react';
import { Link } from 'react-router-dom';

const AddAuthorButton = () => (
    <div className="row">
      <div className="offset-1">
        <Link to ="/add"><div className="btn btn-success">Add an author</div></Link>
      </div>
    </div>
);

export default AddAuthorButton;
