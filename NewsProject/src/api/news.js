
export async function getNews (category) {
    const country = 'us';
    const API_KEY = '8ed729736fe7482e81a7cb219c556f1b';
    const articles_url= 'http://newsapi.org/v2/top-headlines';
    // const category = 'technology';
    const url = `${articles_url}?country=${country}&category=${category}&apiKey=${API_KEY}`;
    let news = await fetch(url)
        .then((res)=>res.json());
    // return (fetch(url))
    //     .then((res) => res.json());
    let result = news;
    news=null;
    return result;
};
