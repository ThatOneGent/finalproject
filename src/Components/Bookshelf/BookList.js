import React from 'react';
import { Suspense } from 'react';
import { BookShelf } from './Bookshelf';
import { bookApi } from '../rest/BookApi';
import { NewShelfForm } from './NewShelfForm';
import { useState } from 'react';
import { Switch, Route, Link, useRouteMatch} from 'react-router-dom/cjs/react-router-dom.min';

export const BookcaseList =() => {
    const [shelves, setState] = useState('');
  /*   state = {
        shelves: []
    };
 */
  /*  function componentDidMount() {
        fetchBookShelf();
    };
 */

    React.useEffect(() => {
        fetchBookShelf();
        console.log("useEffect hit");
    }, []) 

    const fetchBookShelf = async () => {
        const shelving = await bookApi.get();
        setState({ shelving });
        console.log(shelving);
        console.log("this is shelves");
        console.log(shelves);
    };


    const updateBookcase = async (updatedShelf) => {
        await bookApi.put(updatedShelf);
        fetchBookShelf();
    };

    const deleteBookcase = async (updatedShelf) => {
        await bookApi.delete(updatedShelf);
        fetchBookShelf();
    };

    const addBookcase = async (newShelf) => {
        let newBookCase = { Bookcase: newShelf.shelfName, books: [] }
        await bookApi.post(newBookCase);
        fetchBookShelf();
    };

    const lookupBooktest = async (book) => {
        let resp = await bookApi.OLfind(book);
        fetchBookShelf();

        return resp;
    };


//fetchBookShelf();
    
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md'>

                        {console.log("this is in the UL Shelves below")}
                        {console.log(shelves)}
                        <Suspense fallback={ <p>Data is loading</p>}>
                        {shelves.map((bookShelf) => (
                            <BookShelf
                                bookShelf={bookShelf}
                                key={bookShelf.id}
                                updateBookcase={updateBookcase}
                                deleteBookcase={deleteBookcase}
                                lookupBooktest={lookupBooktest}
                            />
                        ))}
                        </Suspense>
                       {/*  {this.state.shelves.map((bookShelf) => (
                            <BookShelf
                                bookShelf={bookShelf}
                                key={bookShelf.id}
                                updateBookcase={this.updateBookcase}
                                deleteBookcase={this.deleteBookcase}
                                lookupBooktest={this.lookupBooktest}
                            />
                        ))} */}



                    </div>
                    <div  className='col-md'>
                    <NewShelfForm addBookcase={addBookcase} />
                    </div>
                </div>
            </div>

            //add a new book case here


        )
    }

    export default BookcaseList;