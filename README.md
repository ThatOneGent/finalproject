<!-- 
    Author:  ThatOneGent
    Subject: Week 16 Final Coding assignment
  ------------------------------------------->
  
# Web App Design with React Router Week 16 Coding Assignment

## Instructions 

1. run ```npm install```
2. run ```npm start```

App is a basis SPA with an emphasis on creating a bookshelf/book collection
There are three main routes, and the ability to so secondary routing when interacting and viewing individual book shelves.


Most data is collected and housed in a custom MockApi instance. The only data not hosted are the actual book cover image files, those are saved as url references.

You have the ability to create, or delete entire shelves with a custom name. Icon will display the name of the shelf as well as how many books are stored.

Within each shelf you are able to add, or delete individual books by entering a title and author name. Book titles are searched for within the Open Library api and a book cover url is returned along with the Works key associated with the search result.

The returned cover art information is used to build out the URL that loads the cover on the bookshelf. If no cover is found then a generic icon is displayed.

There are 11-12 components to this project and are broken down as follows:

Components 
  - Bookshelf
      - BookList.js - builds out the main bookshelf route which contains icons and switching for all bookshelves
      - Bookself.js - builds out the individual bookshelf information. IE. the list of books held within the bookshelf
      - NewBookForm.js - builds out the form used to add a single book
      - NewShelfForm.js - builds out the form for adding a new shelf
  -rest
    - BookApi.js - Api calls for the mockApi book data
    - OLApi.js - Api calls for the OpenLibrary information
  
  - About.js - the main About page
  - Footer.js - Footer used across all pages
  - Header.js - Header that contains the banner and header information, also calls the NavMenu
  - Home.js - Main home and root of the page/app
  - NavMenu.js - Navigation menu portion of the page. Built to be responsive in design using bootstrap and jquery

  - App.js - main app file that calls out the basic structure of entire project




