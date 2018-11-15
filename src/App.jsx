import React from 'react';
import AuthorQuiz from './Components/AuthorQuiz';
import { shuffle, sample } from 'underscore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddAuthorForm from './Components/AddAuthorForm';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './App.css';



const App = () => ( 
    <ReactRedux.Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route exact path="/"  component={AuthorQuiz}/>
                <Route path="/add" component={AddAuthorForm} />
            </Switch>
        </BrowserRouter>
    </ReactRedux.Provider>
);

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'The Adventures of Huckleberry Finn',
            'Life on the Mississippi',
            'Roughing It'
        ]
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: [
            'The Shining',
            'It'
        ]
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/shakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'Romeo and Juliet',
            'Hamlet',
            'Otello',
            'Macbeth'
        ]
    }
];

const getTurnData = authors => {
    const allBooks = authors.reduce((p, c, i) => p.concat(c.books), []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) => 
            author.books.some((title) => 
                title === answer))
    }
};

const reducer = (state = { authors: authors, turnData: getTurnData(authors), highlight: ''}, action) => {
    switch (action.type) {
        case 'ANSWER_SELECTED':
            const isCorrect = state.turnData.author.books.some(book => book === action.answer);
            return Object.assign({}, state, {
                highlight: isCorrect ? 'correct' : 'wrong' 
            });
        case 'CONTINUE':
            return Object.assign({}, state, { 
                highlight: '', 
                turnData: getTurnData(state.authors)
            });
        case 'ADD_AUTHOR':
            return Object.assign({}, state, {
                authors: state.authors.concat([action.author])
            });
        default:
            return state;
    }
};

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default App;