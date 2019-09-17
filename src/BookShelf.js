import React, { Compnent } from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';


class BookShelf extends React.Component {
    static propTypes = {
        //books: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired,
    }
    state = {
        value: 'select'
    }

    render() {
        const { books, moveToShelf } = this.props
        const shelfes = ["currentlyReading", "wantToRead", "read"]
        const shelfeNames = ["Currently Reading", "Want To Read", "Read"]

        return (

            shelfes.map((shelf, index) => (
                <div className="bookshelf" key={index} >
                    <h2 className="bookshelf-title">{shelfeNames[index]}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.filter(book => book.shelf === shelf)
                                .map((book) => (
                                    <li key={book.id}>
                                        <BookCard
                                            bookCard={book}
                                            moveToShelf={moveToShelf} />
                                    </li>
                                ))}
                        </ol>
                    </div>
                </div>
            ))


        )

    }
}

export default BookShelf 