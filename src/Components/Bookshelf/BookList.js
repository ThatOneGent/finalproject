import React from 'react';
import { Suspense } from 'react';
import { BookShelf } from './Bookshelf';
import { bookApi } from '../rest/BookApi';
import { NewShelfForm } from './NewShelfForm';
import { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { openLibApi } from '../rest/OLApi';

export const BookcaseList = () => {
    const initState = { shelves: [] };
    const [state, setState] = useState(initState);

    //setState([]);
    //setState({shelves:[]});

    /* 
          state = {
            shelves: []
        };
       */

    /*  function componentDidMount() {
          fetchBookShelf();
      };
   */

    const match = useRouteMatch();

    React.useEffect(() => {
        fetchBookShelf();
        console.log("useEffect hit");
    }, [])

    const fetchBookShelf = async () => {

        const shelving = await bookApi.get();
        setState({ shelves: shelving });

        console.log("this is shelving after fetch")
        console.log(shelving);
        console.log("this is state");
        console.log(state);
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

    const lookupBookOpenLib = async (book) => {
        let resp = await openLibApi.OLfind(book);

        fetchBookShelf();

        return resp;
    };


    //deprecated due to inconsistent data results from API
    const lookupOpenLibInfo = async (works) => {
        let resp = await openLibApi.OLInfoFind(works);

        return resp;

    };



    const findPostById = id =>
        state.shelves.filter((post) => post.id == id)[0];
    //fetchBookShelf();

    return (
        <div className="container">
            
                <div className='row'>
                    <div className='conatiner' id='shelflist' >

                        <div className='row shelflist-row' >

                            {state.shelves.map((bookShelf, index) => (
                                <div className='col-md-3 shelflist-item' key={index} >
                                    <Link to={`${match.url}/${bookShelf.id}`} className='linkItems align-middle'>
                                    
                                        <div className='shelflink-div align-items-center justify-content-center' >
                                            <span>{bookShelf.Bookcase} 
                                            <br/>
                                            {bookShelf.books.length} Books</span>
                                            
                                            </div>
                                    </Link> 
                                </div>

                            ))}
                        </div>
                    </div>  

                   
                </div>
                <div className='row'>
                    <NewShelfForm addBookcase={addBookcase} />
                </div>
            
            <div className='row'>

            <Switch>
                        <Route
                            path={`${match.path}/:shelfID`}
                            render={(props) => (
                                <BookShelf

                                    bookShelf={findPostById(props.match.params.shelfID)}
                                    key={props.match.params.shelfID}
                                    updateBookcase={updateBookcase}
                                    deleteBookcase={deleteBookcase}
                                    lookupBookOpenLib={lookupBookOpenLib}
                                    lookupOpenLibInfo={lookupOpenLibInfo}
                                />
                            )} />
                    </Switch>
            </div>
        </div>

        //add a new book case here


    )
}

export default BookcaseList;