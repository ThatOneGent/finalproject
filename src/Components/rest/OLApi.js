const OpenLibURL = 'https://openlibrary.org';

class OpenLibApi {

    OLfind = async (book) => {

        try {
            const resp = await fetch(`${OpenLibURL}/search.json?title=${book.title}`);
            const data = await resp.json();

            console.log("OLfind api called - Data and Data.doc[0] below")
            console.log(data);
            console.log(data.docs[0].key);
            return data;

        } catch(e) {
            console.log('Opps, looks like Open Lib Search faild', e);
        }

    }

OLInfoFind = async (works) => {

    try {
        const resp = await fetch(`${OpenLibURL}${works}.json`);
        const data = await resp.json();
        console.log("OLInfoFind called = data below")
        console.log(data);
   
        return data;

    } catch(e) {
        console.log('Opps, looks like Open Lib Info Find faild', e);
    }

}

}



export const openLibApi = new OpenLibApi();