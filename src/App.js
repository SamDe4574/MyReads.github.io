import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './BookShelf';
import Header from './Header';
import Search from './Search';
import PageNotFound from './PageNotFound';

import { Switch,Route, Link } from 'react-router-dom';


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
        <Switch>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <Header />
            <Bookshelf
              books={this.state.books}
              moveToShelf={this.moveToShelf}
            />
            <div className="open-search">
              <Link
                to='/search'
              >add a book</Link>
            </div>
          </div>

        )} />
      <Route exact path='/search' render={() => (
          <Search
            books = {this.state.books}
            moveToShelf={this.moveToShelf}
          />
        )} />
        <Route path="*" component={PageNotFound} />

      </Switch>
      </div>

    )
  }
}

export default BooksApp
