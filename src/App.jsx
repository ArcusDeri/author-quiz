import React from 'react';
import AuthorQuiz from './Components/AuthorQuiz';
import { shuffle, sample } from 'underscore';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import AddAuthorForm from './Components/AddAuthorForm';
import './App.css';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            turnData: this.getTurnData(this.authors),
            highlight: '',
            onAnswerSelected: this.onAnswerSelected,
            onContinue: () => this.resetState()
        };
    } 

    resetState = () => this.setState({turnData: this.getTurnData(this.authors), highlight: ''});

    authors = [
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
    
    getTurnData = authors => {
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
    
    onAnswerSelected = answer => {
        const isCorrect = this.state.turnData.author.books.some(book => book === answer);
        this.setState({
            highlight: isCorrect ? 'correct' : 'wrong'
        });
    };

    AuthorWrapper = withRouter(({ history }) => 
        <AddAuthorForm onAddAuthor={author => {
            author.imageSource = author.imageSource ? author.imageSource : "Unknown";
            this.authors.push(author);
            history.push('/');
        }}/>
    );

    render() {
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"  render={() => <AuthorQuiz {...this.state}/>}/>
                    <Route path="/add" component={this.AuthorWrapper} />
                </Switch>
            </BrowserRouter>
        );
    }

}

export default App;