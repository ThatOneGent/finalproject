import React from "react";
import { NewBookForm } from './NewBookForm'
import { useHistory, Link } from 'react-router-dom'

export const BookShelf = (props) => {
    const { data } = props;
    const { bookShelf, updateBookcase, deleteBookcase, lookupBookOpenLib, lookupOpenLibInfo } = props;
    console.log(props);
    const deleteBook = (bookId) => {
        const updatedShelf = {
            ...bookShelf,
            books: bookShelf.books.filter((x) => x.id !== bookId)
        };
        console.log('deletedBook');
        console.log(updatedShelf);
        updateBookcase(updatedShelf);
    };

    const addNewBook = async (book) => {
        let newID = Math.floor(1000 + Math.random() * 9000);
        book = { ...book, id: newID };
        console.log("Openlib api test");
        //console.log(lookupBooktest(book));  //always gives promise pending
        const OpenLibBook = await lookupBookOpenLib(book);

        //const resp = await lookupBooktest(book);
        //const TestResults = await OpenLibBook.json();
        console.log('What came back from openLib');
        console.log(OpenLibBook);

        if (OpenLibBook) {

            // block below deprecated due to inconsistent data results

            /* 
            const OpenLibBookInfo = await lookupOpenLibInfo(OpenLibBook.docs[0].key);
            console.log("OpenLibBookInfo return results");
            console.log(OpenLibBookInfo);
            
            book = { ...book, OLworks: OpenLibBook.docs[0].key, cover: OpenLibBookInfo.covers, synop: OpenLibBookInfo.description}; */

            book = { ...book, OLworks: OpenLibBook.docs[0].key, cover: `https://covers.openlibrary.org/b/id/${OpenLibBook.docs[0].cover_i}-M.jpg` };


        } else {
            // add place holder cover image and synopsis text into book variable
            book = { ...book, OLworks: '', cover: '/imgs/coverdefault.jpg' };
        }

        // test to add multiple covers... will expand later
        // book = { ...book, OLworks: OpenLibBook.docs[0].key, cover: [OpenLibBook.docs[0].cover_i, OpenLibBook.docs[1].cover_i, OpenLibBook.docs[2].cover_i,] };

        // book = { ...book, OLworks: OpenLibBook.docs[0].key, cover: OpenLibBook.docs[0].cover_i };


        return updateBookcase({ ...bookShelf, books: [...bookShelf.books, book] })
    };

    const deleteShelf = (shelf) => {

        deleteBookcase(shelf);
    };

    function CarouselBuild() {

        return (
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner">
                    <div className="item active">
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover[0]}-M.jpg`} alt="Los Angeles" />
                    </div>

                    <div className="item">
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover[1]}-M.jpg`} alt="Chicago" />
                    </div>

                    <div className="item">
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover[3]}-M.jpg`} alt="New York" />
                    </div>
                </div>


                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }



    const books = () => (


        <div className="bookshelf-div container-fluid">
            {console.log("bookshelf below")}
            {console.log(bookShelf)}
            {console.log(data)}
            <div className="row bookshelf-row">
                {bookShelf.books.map((book, index) => (

                    <div className="col single-book-col" key={index}>
                        <div className="row "> 
                        <div className="row img-Col">

                            <div><img src={`${book.cover}`}

                            /*                     onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="/imgs/coverdefault.jpg";
                              }} */


                            /></div>


                            {/* <div><img src={`https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`} onError={src='http://server/app/resources/img/avatar.jpg'}/></div> */}


                            {/* <div>(Image from OpenLibrary)</div>  */}
                        </div>
                        <div className="row">
                            <div>
                                <strong> Title: </strong> {`${book.title}`} 
                            </div>
                            <div>
                                <strong> Author: </strong> {`${book.author}`}
                              </div>
                            
                            {/* <tr> <strong> Synopsis (from open Library) - </strong> TEST TEXT</tr> */}
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <button onClick={(e) => deleteBook(book.id)}>Delete</button>
                        </div>
                        </div>
                        {console.log('li hit')}
                        {console.log(book.title)}
                    </div>

                ))}
            </div>
        </div>

    );

    /*     const RedirectEntry =() => {
            const history = useHistory();
            history.push("/Bookshelf");
    
            return
        }; */


    return props.bookShelf === undefined ? <h2>Bookshelf Failed to Load, Try Again</h2> : (

        <div className='card border-color-secondary g-0'>
            <h1 className="card-header bg-secondary g-0">{bookShelf.Bookcase}</h1>
            {/* <h2>{bookShelf.id}</h2>*/}
            <div className="card-body">
                {
                    books({ books, shelfId: bookShelf.id, deleteBook })
                }
            </div>
            <NewBookForm addNewBook={addNewBook} />
            {//delete book case goes here
            }
            <div className="card-footer">
            <button className='btn btn-danger' style={{width:'100%'}} onClick={(e) => deleteShelf(bookShelf)}>Delete Bookshelf</button>
            </div>
        </div>
    );
};


/* 
const books = () => (


    <ul>
        {bookShelf.books.map((book, index) => (
            <li key={index}>
                <label><strong> Title: </strong> {`${book.title}`} &nbsp;&nbsp;&nbsp;  <strong> Author: </strong> {`${book.author}`}</label>
                <button onClick={(e) => deleteBook(book.id)}>Delete</button>
                {console.log('li hit')}
                {console.log(book.title)}
            </li>

        ))}

    </ul>

); */