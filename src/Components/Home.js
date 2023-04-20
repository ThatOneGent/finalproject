import React from "react";
import {Link} from "react-router-dom"

export default function Home()  {

     return ( 
        <div>
            <br/>
        {/* <h2>Home</h2> */}
        

        
            <h4>Instructions on how to operate the bookshelf app</h4>
            <ol>
                <li>Select Bookshelf from the main menu above</li>
                <li>Add a Bookshelf by typing in what you wish to call it, and selecting "Add New Bookshelf" button</li>
                <li>Once a bookshelf has been added you can select it by clicking on the name/icon</li>
                <li>Selected bookshelves will display all books currently added</li>
                <li>Books can be added by providing an Input and and Author and selecting the "Add book" button</li>
                <li>Books can be deleted by selecting the "delete" button below each individual book</li>
            </ol>
                <p>Please note: Book covers are automatically generated/pulled using the <a href="https://openlibrary.org/" target="_blank">Open Library</a> api. It is entirely dependant on the Title of the book being input correctly.
                     If the book title is incorrect it may fail to retrieve any information. In the event that no information is pulled, a default "No Cover Available" icon will be displayed.
                     The data pulled from the Open Library project is also community driven and can contain erroneous or incomplete information. This can include incorrect or foreign translation covers of books.</p>
                     <br/>
        <p>For more projects and information about the creator, please visit the <Link to="/About">About</Link> page
            </p>
        
        
        
        </div>
        );
}