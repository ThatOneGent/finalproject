import React from 'react';
import { BookShelf } from './Bookshelf';
import { bookApi } from '../rest/BookApi';
import { NewShelfForm } from './NewShelfForm';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from "react";


const BookcaseList = ()=> {
   
    let [shelves, setState] = useState('');
    
 let statetest = {
        shelves: []
    };  

    const match = useRouteMatch();

     React.useEffect(() => {
        fetchBookShelf();
        console.log("does this get hit ? use effect hit");
    }, []) 

/*     componentDidMount() {
        fetchBookShelf();
    };  */

    const fetchBookShelf = async () => {
        shelves = await bookApi.get();
       
       console.log("fetchbook hit");
        console.log(shelves);
        setState( shelves );
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

    const findPostById =id => 
        shelves.Message.filter((post) => post.id==id)[0];
        

       //fetchBookShelf();

   function MapFunc() {
        
        const mapresp = shelves.map((bookShelf, index) => (
        <li key={index}>
            <Link to={`${match.url} / ${bookShelf.id}`}>
                {bookShelf.name}
            </Link>
        </li>

    ));
            console.log(mapresp);
            return mapresp;
}
    
        
        return (
            <div className="container">
                <div className='row'>

                    <div className='col-md'>
                        <ul>
                            
                            {console.log("state test below")}
                            {console.log(statetest)}
                            
                            

                            {shelves.map((bookShelf, index) => (
                                <li key={index}>
                                    <Link to={`${match.url} / ${bookShelf.id}`}>
                                        {bookShelf.name}
                                    </Link>
                                </li>

                            ))} 

                        </ul>

                        <Switch>
                            <Route
                                path={`${match.path}/:shelfID`}
                                render={(props) => (
                                    <BookShelf
                                    data={findPostById(props.match.params.shelfID)}
                                        bookShelf={bookShelf}
                                        key={bookShelf.id}
                                        updateBookcase={updateBookcase}
                                        deleteBookcase={deleteBookcase}
                                        lookupBooktest={lookupBooktest}
                                    />
                                )} />
                        </Switch>
                    </div>
                    <div className='col-md'>
                        <NewShelfForm addBookcase={addBookcase} />
                    </div>
                </div>
            </div>

            //add a new book case here


        );
    }

    export default BookcaseList;


