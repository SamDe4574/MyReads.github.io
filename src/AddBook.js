import React, { Component } from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';


class AddBook extends React.Component {
  static propTypes = {
      moveToShelf: PropTypes.func.isRequired,
  }

  state = {
  query: '',
  books: []
}

searchQuery(query) {
  this.setState({ query })


  BooksAPI.search(query).then((results) => {
    if (results instanceof Array) {
      results.forEach( results => {
        results.shelf = 'none'
        this.state.books.map( (bookInLibrary) => {
          if (bookInLibrary.id === results.id) {
            results.shelf = bookInLibrary.shelf
          }
          return results
        })
      })
    this.setState({ books: results })

  }  else {
            this.setState({ books: []})
          }
    })
}
    render() {
      const { moveToShelf } = this.props
      const { books,query } = this.state


        return (
            <div className="search-books">
                <div className="search-books-bar">
                  <Link
                      className='close-search'
                      to='/'>
                      Close
                  </Link>                    <div className="search-books-input-wrapper">

                        <input
                          type="text"
                          placeholder="Search by title or author"
                          onChange={(e) => this.searchQuery(e.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                      {books
                          .map((book) => (
                              <li key={book.id}>
                                {book.imageLinks ?(
                                  <BookCard
                                      bookCard={book}
                                      moveToShelf={moveToShelf}
                                      shelf={ book.shelf }
                                      authors={ book.authors }
                                      title={ book.title }
                                      imageLinks={ book.imageLinks.thumbnail }
                                      />
                                    ) : (
                                      <BookCard
                                          bookCard={book}
                                          moveToShelf={moveToShelf}
                                          shelf={ book.shelf }
                                          authors={ book.authors }
                                          title={ book.title }
                                          />
                                      )}

                              </li>
                          ))}
                  </ol>
                  {query.length > 1 && books.length ===0 && (
  <div className="search-error">
    <h4>Sorry </h4>
    <p>No book matches your search.</p>
  </div>
)}
                </div>
            </div>
        )
    }
}

export default AddBook
