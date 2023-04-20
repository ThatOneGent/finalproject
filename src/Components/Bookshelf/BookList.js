import React from 'react';
import { BookShelf } from './Bookshelf';
import { bookApi } from '../rest/BookApi';
import { NewShelfForm } from './NewShelfForm';
import { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { openLibApi } from '../rest/OLApi';

//Component contains the information used to list all current BookShelves, and the routering to display individual shelf data

export const BookcaseList = () => {
    const initState = { shelves: [] }; // initialize the state similar to class component
    const [state, setState] = useState(initState); // set the initial state to state and prep hook


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

    // refactored component did mount portion of class component
    React.useEffect(() => {
        fetchBookShelf();
        console.log("useEffect hit");
    }, [])


    //function to fetch the bookshelf information from MockApi

    const fetchBookShelf = async () => {

        const shelving = await bookApi.get(); // calls custom BookApi get
        setState({ shelves: shelving }); // sets the state

        //testing console out
        console.log("this is shelving after fetch")
        console.log(shelving);
        
       // console.log("this is state");
       // console.log(state);
    };

    // function to update bookshelf
    //this is called when adding a new book - it updates the entire bookshelf array of books

    const updateBookcase = async (updatedShelf) => {
        await bookApi.put(updatedShelf);   // calls custom BookApi Put
        fetchBookShelf();   // calls fetch to refresh pull down the data and refresh the state after updating
    };

    // function to delete a bookshelf

    const deleteBookcase = async (updatedShelf) => {
        await bookApi.delete(updatedShelf);
        fetchBookShelf();
    };

    //function to add bookshelf
    const addBookcase = async (newShelf) => {
        let newBookCase = { Bookcase: newShelf.shelfName, books: [] } // adds a new shelfbased off shelf name and establishes and empty array of books
        await bookApi.post(newBookCase);   // calls custom bookApi Post
        fetchBookShelf();    // Calls fetch to refresh pull down of data and reset state after an udpate
    };

    //function  used to find a book based on title from the Open Library API
    const lookupBookOpenLib = async (book) => {
        let resp = await openLibApi.OLfind(book); // calls custom OpenLibraryAPI method

        fetchBookShelf(); //refreshes state 

        return resp;  //returns the results of the method called
    };


    //deprecated due to inconsistent data results from API
    /* 
    function originally used to pull more relevant data souch as description, mulktiple book covers, etc.
    Because the data is not consistent from book to book, it was deprecated. Leaving the code intact for future revisit

    */
    const lookupOpenLibInfo = async (works) => {
        let resp = await openLibApi.OLInfoFind(works);

        return resp;

    };


// function used to find a specific shelf and pass it into the switch route
    const findShelfById = id =>
        state.shelves.filter((shelf) => shelf.id == id)[0];
    
// main export component return
//lots of bootstrap css and class added to organization and formatting

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
                                            <br />
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

                                bookShelf={findShelfById(props.match.params.shelfID)}
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



    )
}

export default BookcaseList;