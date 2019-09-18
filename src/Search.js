import React from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';


class Search extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveToShelf: PropTypes.func.isRequired,
  }

  state = {
    query: '',
    Searchedbooks: []
  }

  searchQuery(query) {
    this.setState({ query })


    BooksAPI.search(query).then((results) => {
      if (results instanceof Array) {
        results.forEach(result => {
          result.shelf = 'none'
          this.props.books.map((bookInLibrary) => {
            if (bookInLibrary.id === result.id) {
              result.shelf = bookInLibrary.shelf
            }
            return result
          })
        })
        this.setState({ Searchedbooks: results })

      } else {
        this.setState({ Searchedbooks: [] })
      }
    })
  }
  render() {
    const { moveToShelf } = this.props
    const { Searchedbooks, query } = this.state


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className='close-search'
            to='/'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.searchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Searchedbooks
              .map((book) => (
                <li key={book.id}>
                  {book.imageLinks ? (
                    <BookCard
                      bookCard={book}
                      moveToShelf={moveToShelf}
                      shelf={book.shelf}
                      authors={book.authors}
                      title={book.title}
                      imageLinks={book.imageLinks.thumbnail}
                    />
                  ) : (
                      <BookCard
                        bookCard={book}
                        moveToShelf={moveToShelf}
                        shelf={book.shelf}
                        authors={book.authors}
                        title={book.title}
                        imageLinks='http://via.placeholder.com/128x193?text=No%20Cover'
                      />
                    )}

                </li>
              ))}
          </ol>
          {query.length > 1 && Searchedbooks.length === 0 && (
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

export default Search
