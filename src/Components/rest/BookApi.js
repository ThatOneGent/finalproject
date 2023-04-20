
const BOOKURL = 'https://640d4b41b07afc3b0daaeb4e.mockapi.io/books'; // url for MockAPI
//const OpenLibURL = 'https://openlibrary.org';

//Book API for interacting with the MockAPI data
class BookApi {

    //get method for fetching book information

    get = async () => {

        try {
            const resp = await fetch(BOOKURL);
            const data = await resp.json();
            return data;

        } catch(e) {
            console.log('Opps, looks like fetching bookshelf', e);
        }

    }

    //post method for adding a whole new shelf
    post = async (shelf) => {
        try {
            const resp = await fetch(`${BOOKURL}`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shelf)
            });
            return await resp.json();
        } catch(e) {
            console.log('oops the add bookshelf didnt work.')
        }
        //return $.post(this.url, plant);
    }

    //put method to update a specific shelf (used for adding and removing individual books)
    put = async (shelf) => {

        try {
            const resp = await fetch(`${BOOKURL}/${shelf.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shelf)

            });
            return await resp.json();

        } catch(e) {
            console.log('Opps, looks like updating bookshelf had an issue', e);
        }
    }

    //delete method to remove an entire bookshelf
    delete = async (shelf) => {
        try {
            const resp = await fetch(`${BOOKURL}/${shelf.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shelf)

            });
            return await resp.json();

        } catch(e) {
            console.log('Opps, looks like deleting shelf had an issue', e);
        }

    }



}

export const bookApi = new BookApi();