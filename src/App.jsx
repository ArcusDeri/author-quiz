import React, { Component } from 'react';
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

function  Turn({author, books}) {
  return (
    <div className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="author-image" alt="Author"/>
      </div>
      <div className="col-6">
        {books.map(title => <Book title={title} key={title}/>)}
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

const Book = ({title}) => (
  <div className="book">
    <h4 className="book-title">{title}</h4>
  </div>
);

const App = ({turnData}) => (
  <div className="container-fluid">
    <Hero/>
    <Turn {...turnData} />
    <Continue/>
    <Footer/>
  </div>
);

export default App;
