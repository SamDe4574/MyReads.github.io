import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './BookShelf';
import Header from './Header';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
        <Header />
        <Bookshelf
          books={this.state.books}
          moveToShelf={this.moveToShelf}
        />
      </div>
    )
  }
}

export default BooksApp
