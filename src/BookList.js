import React from 'react'
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';


class BookList extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        //onDeleteContact: PropTypes.func.isRequired,
    }
    render() {
        const { books } = this.props

        return (
            <div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf books={books} />
                        </div>
                    </div>
                    <div className="open-search">
                        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default BookList
