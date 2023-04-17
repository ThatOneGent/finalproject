import React from "react";
import { NewBookForm } from './NewBookForm'

export const BookShelf = (props) => {
    const { bookShelf, updateBookcase, deleteBookcase, lookupBooktest } = props;

    const deleteBook = (bookId) => {
        const updatedShelf = {
            ...bookShelf,
            books: bookShelf.books.filter((x) => x.id !== bookId)
        };
        console.log('deletedBook');
        console.log(updatedShelf);
        updateBookcase(updatedShelf);
    };

    const addNewBook = async (book) => {
        let newID = Math.floor(1000 + Math.random() * 9000);
        book = { ...book, id: newID };
        console.log("Openlib api test");
        //console.log(lookupBooktest(book));  //always gives promise pending
        const OpenLibBook = await lookupBooktest(book);
       //const resp = await lookupBooktest(book);
        //const TestResults = await OpenLibBook.json();
        console.log('test book retrieve');
        //console.log(TestResults);

        book ={...book, OLworks: OpenLibBook.docs[0].key, cover:OpenLibBook.docs[0].cover_i};


        return updateBookcase({ ...bookShelf, books: [...bookShelf.books, book] })
    };

    const deleteShelf = (shelf) => {

        deleteBookcase(shelf);
    };


    const books = () => (


        <table className="bookshelf-table">
            {bookShelf.books.map((book, index) => (
                <tr key={index}>
                    <td>
                        <label><strong> <img src={`https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`}/> Title: </strong> {`${book.title}`} &nbsp;&nbsp;&nbsp;  <strong> Author: </strong> {`${book.author}`}</label>
                    </td>
                    <td>
                    <button onClick={(e) => deleteBook(book.id)}>Delete</button>
                    </td>
                    {console.log('li hit')}
                    {console.log(book.title)}
                </tr>

            ))}

        </table>

    );

    return (
        <div className='card border-color-secondary'>
            <h1 className="card-header bg-success">{bookShelf.Bookcase}</h1>
            {/* <h2>{bookShelf.id}</h2>*/}
            <div className="card-body">
                {
                    books({ books, shelfId: bookShelf.id, deleteBook })
                }
            </div>
            <NewBookForm addNewBook={addNewBook} />
            {//delete book case goes here
            }
            <button onClick={(e) => deleteShelf(bookShelf)}>Delete Bookshelf</button>
        </div>
    );
};


/* 
const books = () => (


    <ul>
        {bookShelf.books.map((book, index) => (
            <li key={index}>
                <label><strong> Title: </strong> {`${book.title}`} &nbsp;&nbsp;&nbsp;  <strong> Author: </strong> {`${book.author}`}</label>
                <button onClick={(e) => deleteBook(book.id)}>Delete</button>
                {console.log('li hit')}
                {console.log(book.title)}
            </li>

        ))}

    </ul>

); */