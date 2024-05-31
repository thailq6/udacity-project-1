import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelves from "./BookShelves";

const shelves = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read"
};

const HomePage = ({ allBooks, changeShelf }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {Object.entries(shelves).map(([key, title]) => (
                    <BookShelves 
                      books={allBooks.filter(book => book.shelf === key)} 
                      changeShelf={changeShelf} 
                      title={title} 
                    />
                ))}
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
};

HomePage.propTypes = {
    allBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default HomePage;
