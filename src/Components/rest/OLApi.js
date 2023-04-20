const OpenLibURL = 'https://openlibrary.org';

//API file to interact with the Open Library API
//Only used to pull in extra data

class OpenLibApi {


    //method used to find / search for a book based on it's title

    OLfind = async (book) => {

        try {
            const resp = await fetch(`${OpenLibURL}/search.json?title=${book.title}`);
            const data = await resp.json();

            //console log for testing that it worked
            console.log("OLfind api called - Data and Data.doc[0] below")
            console.log(data);
            console.log(data.docs[0].key);

            return data;

        } catch (e) {
            console.log('Opps, looks like Open Lib Search faild', e);
        }

    }

    //method used to locate MORE information based on the works key found in previous method
    //this is no longer used as the data is inconsistent from book to book.
    OLInfoFind = async (works) => {

        try {
            const resp = await fetch(`${OpenLibURL}${works}.json`);
            const data = await resp.json();
            
            //console log for testing
            console.log("OLInfoFind called = data below")
            console.log(data);

            return data;

        } catch (e) {
            console.log('Opps, looks like Open Lib Info Find faild', e);
        }

    }

}



export const openLibApi = new OpenLibApi();