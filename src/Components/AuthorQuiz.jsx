import React from 'react';
import Turn from './Turn';
import Hero from './Hero';
import Continue from './Continue';
import Footer from './Footer';
import AddAuthorButton from './AddAuthorButton';

const AuthorQuiz = ({turnData, highlight, onAnswerSelected}) => (
  <div className="container-fluid">
    <Hero/>
    <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
    <Continue/>
    <AddAuthorButton/>
    <Footer/>
  </div>
);

export default AuthorQuiz;
