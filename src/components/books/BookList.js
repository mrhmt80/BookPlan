import React from 'react';
import BookSummary from './BookSummery'
import { Link } from 'react-router-dom';

const BookList = ({books}) => {
    return (
        <div className="project-list section">
            {books && books.map(book => {
                return (
                    //passing each book into BookSummary.
                    <Link to ={'/books/'+ book.id} key = {book.id}  > <BookSummary book={book} /> </Link>
                )
            })}
        </div>
    )
}

export default BookList;