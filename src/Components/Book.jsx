import React from 'react';

const Book = ({title, onClick}) => (
    <div className="book" onClick={() => onClick(title)}>
      <h4 className="book-title">{title}</h4>
    </div>
);

export default Book;