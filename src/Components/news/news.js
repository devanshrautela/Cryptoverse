import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsShow from './NewsShow';
import './ndata.json';
import './news.css';
const News = () => {
  const [NewsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://newsapi.org/v2/top-headlines?category=technology&country=us'; 
    const apiKey = 'e0fd95f3113b4b38a11b58d6efecfec8'; 
  

    axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
        .then(response => {
           // console.log(response.data.articles);
          setNewsData(response.data.articles);
        })
        .catch(error => {
          console.error('Error fetching news:', error);
        });

        // if api do not work comment every thing under useeffect and then uncomment aerticles array at top
        // then do below
        //setNewsData(articles);
    }, []);
 
  return (
    <div className="news-component  ">
      <h3 className="news-heading">Latest Updates</h3>
      {NewsData.map((element)=>{
        return (
            // console.log(element.title);
          <NewsShow title={element.title?element.title : "-"} description={element.description} url={element.url} imageUrl={element.urlToImage}/>
        )
      })}
    </div>

       );
    };
  export default News;