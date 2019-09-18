import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './BookShelf';
import Header from './Header';
import AddBook from './AddBook';

import { Route, Link } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books =>
        this.setState(() => ({
          books
        }))
      )
  }
  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(() => ({
        books: this.state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <Header />
            <Bookshelf
              books={this.state.books}
              moveToShelf={this.moveToShelf}
            />
            <div className="open-search">
              <Link
                to='/addBook'
              >add a book</Link>
            </div>
          </div>

        )} />
        <Route exact path='/addBook' render={() => (
          <AddBook
            moveToShelf={this.moveToShelf}
          />
        )} />
      </div>

    )
  }
}

export default BooksApp
