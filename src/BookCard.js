import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BookCard extends React.Component {
    static propTypes = {
        bookCard: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired,
    }

    update(shelf) {
        this.props.moveToShelf(this.props.bookCard, shelf)
    }

    render() {
        const { bookCard } = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCard.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={bookCard.shelf} onChange={(e) => this.update(e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookCard.title}</div>
                <div className="book-authors">{bookCard.authors}</div>
            </div>
        )
    }
}

export default BookCard