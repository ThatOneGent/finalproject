import React from "react";
import { NewBookForm } from './NewBookForm'

//Componenet displays individual bookshelf, all books with in said bookshelf, and calls on components allowing for adding a new book
//also allows for deleting of individual books OR the entire shelf


export const BookShelf = (props) => {

    //prime props/components and output test results
    const { data } = props;
    const { bookShelf, updateBookcase, deleteBookcase, lookupBookOpenLib, lookupOpenLibInfo } = props;
  
   // console.log(props);

//function for deleting individual book

    const deleteBook = (bookId) => {
        //set updated bookshelf that will be passed in
        
        const updatedShelf = {
            ...bookShelf,
            books: bookShelf.books.filter((x) => x.id !== bookId) //filter out the book to be deleted
        };

        //console log for testing
       // console.log('deletedBook');
       // console.log(updatedShelf);
    
        updateBookcase(updatedShelf); //Call function to update the bookcase from BookList.js
    };

//function for adding individual book
    const addNewBook = async (book) => {
        let newID = Math.floor(1000 + Math.random() * 9000); //mockApi does not create an id for individual books - this sets a random four digit ID# for each book... this pay cause an issue if a book has a repeat ID, but slim chances 
        book = { ...book, id: newID }; //new book (title/author) has newID added on
   
        
        const OpenLibBook = await lookupBookOpenLib(book); //calling OpenLib book lookup using book data just submitted
        
        const resultsTest = OpenLibBook.docs[0]; //set the results test to first doc in returned results so hasOwnPropety compare works
        
        //console.log("results test output")
       // console.log(resultsTest);

        //Console log for testing

        //const resp = await lookupBooktest(book);
        //const TestResults = await OpenLibBook.json();

        //console.log('What came back from openLib');
        //console.log(OpenLibBook);
        //console.log("Does cover exist??");
        //console.log(resultsTest.hasOwnProperty('cover_i'));


        if (OpenLibBook) {  //IF the data returns from OpenLib... 


            // block below deprecated due to inconsistent data results from OpenLib API

            /* 
            const OpenLibBookInfo = await lookupOpenLibInfo(OpenLibBook.docs[0].key);
            console.log("OpenLibBookInfo return results");
            console.log(OpenLibBookInfo);
            
            book = { ...book, OLworks: OpenLibBook.docs[0].key, cover: OpenLibBookInfo.covers, synop: OpenLibBookInfo.description}; */

            if(resultsTest.hasOwnProperty('cover_i')){   // check to see if the returned results contain the cover_i property
                
                // if open library returns data AND there is a cover.... add the OpenLib works Key, and the cover information to book
                book = { ...book, OLworks: OpenLibBook.docs[0].key, cover: `https://covers.openlibrary.org/b/id/${OpenLibBook.docs[0].cover_i}-M.jpg` };
            } else {
                
                // if the cover property does not exist, BUT data was returned.... insert stock data for image
                book = { ...book, OLworks: '', cover: '/imgs/coverdefault.jpg' };
            }

            
            
            //Using URL versus just the cover results only. This is due to the default cover being used as well



        } else {
            //IF no results are returned or an error occurs on the OpenLib api
            // add place holder cover image and synopsis text into book variable
            book = { ...book, OLworks: '', cover: '/imgs/coverdefault.jpg' };
        }


        // test to add multiple covers... will expand later
        // book = { ...book, OLworks: OpenLibBook.docs[0].key, cover: [OpenLibBook.docs[0].cover_i, OpenLibBook.docs[1].cover_i, OpenLibBook.docs[2].cover_i,] };
        // book = { ...book, OLworks: OpenLibBook.docs[0].key, cover: OpenLibBook.docs[0].cover_i };


        return updateBookcase({ ...bookShelf, books: [...bookShelf.books, book] }) //return is the updatedBookcase being passed new book that was just added
    };

//function to delete entire shelf -- used by button
    const deleteShelf = (shelf) => {

        deleteBookcase(shelf); // calls the deleteBookcase from BookList.js
    };

    // This is deprecated code as the multiple covers part doesnt work due to bad data - may revisit later

    /* 
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
 */

//function that builds the book portion of the return export
//some left over commented code for deprecated functions- may reimplement or revise later

    const books = () => (


        <div className="bookshelf-div container-fluid">

        {/* Console logs for testing */}
   {/*          {console.log("bookshelf below")}
            {console.log(bookShelf)}
            {console.log(data)}
             */}
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

                        {/* Testing consoles */}

                       {/*  {console.log('li hit')}
                        {console.log(book.title)} */}

                    </div>

                ))}
            </div>
        </div>

    );



//if the props are blank or there is an error, display error, other wise return results
// this extra piece keeps portion of the above code from running, or throwing an error before data has time to flow back down
// no error message means it will alway try and load, and possibly cause fatal error

    return props.bookShelf === undefined ? <h2>Bookshelf Failed to Load, Try Again</h2> : ( 

        <div className='card border-color-secondary g-0'>
            <h1 className="card-header bg-secondary g-0">{bookShelf.Bookcase}</h1>
            
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

