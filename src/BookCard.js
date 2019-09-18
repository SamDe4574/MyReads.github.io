import React from 'react';
import PropTypes from 'prop-types';


class BookCard extends React.Component {
    static propTypes = {
        bookCard: PropTypes.object.isRequired,
        moveToShelf: PropTypes.func.isRequired,
    }

    update(shelf) {
        this.props.moveToShelf(this.props.bookCard, shelf)
    }

    render() {
        const { bookCard, authors, title, imageLinks } = this.props
        if (bookCard.shelf == null) { bookCard.shelf = 'none' }
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={bookCard.shelf} onChange={(e) => this.update(e.target.value)}>
                            <option value="move" disabled>Move To ...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors && authors.join(', ')}</div>
            </div>
        )
    }
}

export default BookCard
