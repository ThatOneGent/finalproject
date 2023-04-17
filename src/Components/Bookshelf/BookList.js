import React from 'react';
import { BookShelf } from './Bookshelf';
import { bookApi } from '../rest/BookApi';
import { NewShelfForm } from './NewShelfForm';


export class BookcaseList extends React.Component {
    state = {
        shelves: []
    };

    componentDidMount() {
        this.fetchBookShelf();
    };

    fetchBookShelf = async () => {
        const shelves = await bookApi.get();
        this.setState({ shelves });
    };


    updateBookcase = async (updatedShelf) => {
        await bookApi.put(updatedShelf);
        this.fetchBookShelf();
    };

    deleteBookcase = async (updatedShelf) => {
        await bookApi.delete(updatedShelf);
        this.fetchBookShelf();
    };

    addBookcase = async (newShelf) => {
        let newBookCase = { Bookcase: newShelf.shelfName, books: [] }
        await bookApi.post(newBookCase);
        this.fetchBookShelf();
    };

    lookupBooktest = async (book) => {
        let resp = await bookApi.OLfind(book);
        this.fetchBookShelf();

        return resp;
    };



    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md'>
                        {this.state.shelves.map((bookShelf) => (
                            <BookShelf
                                bookShelf={bookShelf}
                                key={bookShelf.id}
                                updateBookcase={this.updateBookcase}
                                deleteBookcase={this.deleteBookcase}
                                lookupBooktest={this.lookupBooktest}
                            />
                        ))}
                    </div>
                    <div  className='col-md'>
                    <NewShelfForm addBookcase={this.addBookcase} />
                    </div>
                </div>
            </div>

            //add a new book case here


        )
    }
}
