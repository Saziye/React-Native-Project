import { useState, useEffect } from 'react';
import { getNews } from '../api/news';

export default (category) => {
  const [news, setNews] = useState({});
   //const category = 'general';

  getNews(category)
    .then(res => setNews(res));


  useEffect(() => {
    getNews();
  }, []);
 
 // console.log(news);
  return [news];
};
 
