import React from "react";
import { useState } from "react";

//Component to add an whole new bookshelf 

export const NewShelfForm = (props) => {

    const [shelfName, setShelfName] = useState(''); //set hooks

//onsubmit function to add shelf
    const addShelfSub = (e) => {
        e.preventDefault();
        if (shelfName) {

            props.addBookcase({ shelfName }); //calls the addBookcase function in Booklist.js
            setShelfName('');
        } else {
            console.log('invalid input');
        }

    };


    //returns form to add a new shelf using only a name.
    return (
        
            <div className="container-fluid g-0 p-2 text-center">
            
                <form className='row justify-content-center' onSubmit={addShelfSub}>
                
                <label className="col-form-label col-md-3 text-end"><h4>Add a new Shelf</h4></label>
                <div className="col-md-3">
                    <input
                    className="form-control"
                        type='text'
                        placeholder='Shelf Name'
                        onChange={(e) => setShelfName(e.target.value)}
                        value={shelfName}
                    />
                </div>
                
                <div className="col-md-3 text-start">
                    <button className="btn btn-success" type='submit'>Add new Bookshelf</button>
               </div>
               
                </form>
         </div>
        


    )


};