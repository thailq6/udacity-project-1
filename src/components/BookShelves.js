import PropTypes from "prop-types";
import Book from "./Book";

const BookShelves = ({ books, changeShelf, title }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(({ id, ...bookProps }) => (
                    <li key={id}>
                        <Book book={{ id, ...bookProps }} changeShelf={changeShelf} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

BookShelves.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookShelves;
