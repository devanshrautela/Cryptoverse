import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can use 'axios' for making API requests
import NewsShow from './NewsShow';
import './ndata.json';
import './news.css';
// const articles= 
//     [
//         {
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Canada wildfires: British Columbia province declares emergency",
//             "description": "A fast-moving blaze threatens to destroy more homes in the western British Columbia province.",
//             "url": "http://www.bbc.co.uk/news/world-us-canada-66551480",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12F4C/production/_130844677_canada_wildfire_getty.jpg",
//             "publishedAt": "2023-08-19T03:37:17.356008Z",
//             "content": "Media caption, WATCH: Canada wildfires: The past 48 hours in 75 seconds\r\nA state of emergency has been declared in Canada's western British Columbia province, as a fast-moving wildfire threatens to d… [+2659 chars]"
//         },
//         {
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "'It started raining pine cones and tree bark'",
//             "description": "Todd Ramsay filmed trees ablaze as he and his family fled wildfire in British Columbia.",
//             "url": "http://www.bbc.co.uk/news/world-us-canada-66551001",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/747F/production/_130832892_p0g7l0r0.jpg",
//             "publishedAt": "2023-08-19T00:37:19.1768571Z",
//             "content": "'It started raining pine cones and tree bark' Video, 00:00:28'It started raining pine cones and tree bark'"
//         },
//         {
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC Sport",
//             "title": "The mastermind behind the Lionesses' success",
//             "description": "BBC Sport speaks to players and coaches to get an insight into Sarina Wiegman as she prepares to lead England into the World Cup final.",
//             "url": "http://www.bbc.co.uk/sport/football/62016998",
//             "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/150B1/production/_130839168_gettyimages-1239012069.jpg",
//             "publishedAt": "2023-08-19T00:37:18.9112969Z",
//             "content": "Sarina Wiegman guided England to their first ever major women's trophy at Euro 2022 last year\r\n<table><tr><th>2023 Fifa Women's World Cup: Final - Spain v England</th></tr>\r\n<tr><td>Venue: Stadium Au… [+12774 chars]"
//         },
//         {
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "US-Japan-SKorea summit a coup for Biden but will détente last?",
//             "description": "The US hosts its first ever joint meeting with South Korea and Japan - neighbours with a tense relationship.",
//             "url": "http://www.bbc.co.uk/news/world-asia-66543514",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8FE2/production/_130843863_d8c1e25c2039edbb4554dbffb9ded80b016f250e0_0_5004_30481000x609.jpg",
//             "publishedAt": "2023-08-19T00:37:17.4272924Z",
//             "content": "The United States and China have achieved what many deemed impossible - a historic meeting between US President Joe Biden, Japan's Prime Minister Fumio Kishida and South Korea's President Yoon Suk-ye… [+8187 chars]"
//         },
//         {
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Cat and dog influencers help Ukrainians cope with war",
//             "description": "How animals' accounts have been bringing Ukrainians hope and even practical advice at a time of war.",
//             "url": "http://www.bbc.co.uk/news/world-europe-66509999",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/703A/production/_130803782_patron_dsns.jpg",
//             "publishedAt": "2023-08-19T00:37:16.2228558Z",
//             "content": "From fundraising to detecting explosives, cats and dogs have been helping Ukrainians deal with the devastating impact of Russia's invasion.\r\nPatron, the mine-sniffing dog, is one of them. He works fo… [+5583 chars]"
//         }
//     ];
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
            console.log(response.data.articles);
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
      <h3 className="tc f2 f4-ns dark-grey ">News</h3>
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