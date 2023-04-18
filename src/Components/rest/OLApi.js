const OpenLibURL = 'https://openlibrary.org';

class OpenLibApi {

    OLfind = async (book) => {

        try {
            const resp = await fetch(`${OpenLibURL}/search.json?title=${book.title}`);
            const data = await resp.json();
            console.log(data);
            console.log(data.docs[0].key);
            return data;

        } catch(e) {
            console.log('Opps, looks like Open Lib faild', e);
        }

    }

}

export const openLibApi = new OpenLibApi();