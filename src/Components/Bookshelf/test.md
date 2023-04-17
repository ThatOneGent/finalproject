import React from 'react';
import { BookShelf } from './Bookshelf';
import { bookApi } from '../rest/BookApi';
import { NewShelfForm } from './NewShelfForm';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';




const BookcaseList = ()=> {
    state = {
        shelves: []
    };

    const match = useRouteMatch();

    function componentDidMount() {
        this.fetchBookShelf();
    };

    const fetchBookShelf = async () => {
        const shelves = await bookApi.get();
        this.setState({ shelves });
    };


    const updateBookcase = async (updatedShelf) => {
        await bookApi.put(updatedShelf);
        this.fetchBookShelf();
    };

    const deleteBookcase = async (updatedShelf) => {
        await bookApi.delete(updatedShelf);
        this.fetchBookShelf();
    };

    const addBookcase = async (newShelf) => {
        let newBookCase = { Bookcase: newShelf.shelfName, books: [] }
        await bookApi.post(newBookCase);
        this.fetchBookShelf();
    };

    const lookupBooktest = async (book) => {
        let resp = await bookApi.OLfind(book);
        this.fetchBookShelf();

        return resp;
    };

    const findPostById =id => 
        shelves.Message.filter((post) => post.id==id)[0];
        


    
        
        return (
            <div className="container">
                <div className='row'>

                    <div className='col-md'>
                        <ul>
                            {this.state.shelves.map((bookShelf, index) => (
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
                                    data={this.findPostById(props.match.params.shelfID)}
                                        bookShelf={bookShelf}
                                        key={bookShelf.id}
                                        updateBookcase={this.updateBookcase}
                                        deleteBookcase={this.deleteBookcase}
                                        lookupBooktest={this.lookupBooktest}
                                    />
                                )} />
                        </Switch>
                    </div>
                    <div className='col-md'>
                        <NewShelfForm addBookcase={this.addBookcase} />
                    </div>
                </div>
            </div>

            //add a new book case here


        );
    }

    export default BookcaseList;


