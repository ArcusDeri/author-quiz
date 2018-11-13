import React from "react";

const AddAuthorForm = ({match}) => (
    <div>
        <p>Add Author</p>
        <p>{JSON.stringify(match)}</p>
    </div>
);

export default AddAuthorForm;