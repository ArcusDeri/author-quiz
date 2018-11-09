import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function  Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>)
}

const highlightToBgColor = highlight => {
  const mapping = {
    'none': '',
    'correct': 'green',
    'wrong': 'red'
  }
  return mapping[highlight];
};

function  Turn({author, books, highlight, onAnswerSelected}) {
  return (
    <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="author-image" alt="Author"/>
      </div>
      <div className="col-6">
        {books.map(title => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>)
}

function  Continue() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        continue
      </div>
    </div>)
}

function  Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All image are from commons.wikimedia.org
        </p>
      </div>
    </div>)
}

const Book = ({title, onClick}) => (
  <div className="book" onClick={() => onClick(title)}>
    <h4 className="book-title">{title}</h4>
  </div>
);

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
}

const App = ({turnData, highlight, onAnswerSelected}) => (
  <div className="container-fluid">
    <Hero/>
    <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
    <Continue/>
    <Footer/>
  </div>
);

export default App;
