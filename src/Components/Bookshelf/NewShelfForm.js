import React from "react";
import { useState } from "react";

export const NewShelfForm = (props) => {
    const [shelfName, setShelfName] = useState('');

    const addShelfSub = (e) => {
        e.preventDefault();
        if (shelfName) {

            props.addBookcase({ shelfName });
            setShelfName('');
        } else {
            console.log('invalid input');
        }

    };

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