import React from "react";
import { useState } from "react";

//Component contains the form used to add a new book

export const NewBookForm = (props) => {
    //set hooks for state changes
    const [title, setTitle] = useState('');
    const [author, setAuth] = useState('');

  
//on submit of new book function

    const onSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            props.addNewBook({ title, author }); //calls the addNewBook function in bookshelf.js
            setTitle('');
            setAuth('');
        } else {

            alert("Invalid Input, please enter both Title and author");
            console.log('invalid input');
        }
    };

    //returns the form to submit title and author for adding a book
    return (
        <div className="container ">
            <h4>Add a new book</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    />

                <input 
                    type='text'
                    placeholder='author'
                    onChange={(e) => setAuth(e.target.value)}
                    value={author}
                />

            <button className="btn btn-success" type='submit'>Add book</button>
                    

            </form>
        </div>
    )
};