import React from "react";
import { useState } from "react";

export const NewBookForm = (props) => {
    const [title, setTitle] = useState('');
    const [author, setAuth] = useState(undefined);

  

    const onSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            props.addNewBook({ title, author });
            setTitle('');
            setAuth('');
        } else {
            console.log('invalid input');
        }
    };

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

            <button className="btn btn-primary" type='submit'>Add book</button>
                    

            </form>
        </div>
    )
};