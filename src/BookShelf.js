import React, { Compnent } from 'react';
import PropTypes from 'prop-types';


class BookShelf extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        //onDeleteContact: PropTypes.func.isRequired,
    }
    render() {
        const { books } = this.props
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
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select>
                                                        <option value="move" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">{book.authors}</div>
                                        </div>
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