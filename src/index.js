import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { shuffle, sample } from 'underscore';

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

const onAnswerSelected = answer => {
    const isCorrect = state.turnData.author.books.some(book => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
};

const state = {
    turnData: getTurnData(authors),
    highlight: '',
    onAnswerSelected
};

const render = () => ReactDOM.render(<App {...state} />, document.getElementById('root'));

render();
serviceWorker.unregister();
