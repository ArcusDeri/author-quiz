import React from 'react';
import Turn from './Turn';
import Hero from './Hero';
import Continue from './Continue';
import Footer from './Footer';
import AddAuthorButton from './AddAuthorButton';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    turnData: state.turnData, 
    highlight: state.highlight
  };
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    onAnswerSelected: (answer) => {
      dispatchEvent({ type: 'ANSWER_SELECTED', answer });
    },
    onContinue: () => {
      dispatchEvent({ type: 'CONTINUE' });
    }
  };
};

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(({turnData, highlight, onAnswerSelected, onContinue}) => (
  <div className="container-fluid">
    <Hero/>
    <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
    <Continue isVisible={highlight === 'correct'} onContinue={onContinue}/>
    <AddAuthorButton/>
    <Footer/>
  </div>
));

export default AuthorQuiz;
