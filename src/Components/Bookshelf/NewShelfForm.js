import React from "react";
import {useState} from "react";

export const NewShelfForm = (props) => {
    const[shelfName, setShelfName] = useState('');
    
    const addShelfSub = (e) => {
         e.preventDefault();
        if(shelfName){
       
        props.addBookcase({shelfName});
        setShelfName('');
        } else {
            console.log('invalid input');
        }

    };

    return (
        <div>
            <h4>Add a new Shelf</h4>
            <form onSubmit={addShelfSub}>
                    <input
                        type='text'
                        placeholder='Shelf Name'
                        onChange={(e) => setShelfName(e.target.value)}
                        value = {shelfName}
                    />
                    <button className="btn btn-primary" type='submit'>Add new Bookshelf</button>

                </form>
        </div>


    )


};