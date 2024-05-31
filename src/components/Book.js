import PropTypes from "prop-types";

const Book = ({ book, changeShelf }) => {
    const { imageLinks, title, authors, shelf } = book;
    const coverStyle = {
        width: 128,
        height: 193,
        backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ''})`,
    };

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={coverStyle}
                ></div>
                <div className="book-shelf-changer">
                    <select defaultValue={shelf || 'none'} onChange={(event) => changeShelf(event.target.value, book)}>
                        <option value="moveTo" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title || 'Not Found'}</div>
            <div className="book-authors">{authors || 'Not Found'}</div>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.shape({
        imageLinks: PropTypes.object,
        title: PropTypes.string,
        authors: PropTypes.array,
        shelf: PropTypes.string,
    }).isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Book;
