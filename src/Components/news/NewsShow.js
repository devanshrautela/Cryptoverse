import React, { useState, useEffect } from 'react';

import './news.css';
const NewsShow = ({title, description , url , imageUrl}) => {
  
    return (
      <div className=" w-100">
      <article className="news-card br2 ba black b--blue-10 mv4 w-100-m center">
          <img src={imageUrl} className="image-news br2 " alt={description}/>
          <div className="pa2 ph3-ns pb3-ns">
              <div className="dt w-100 mt1">
                  <div className="dtc">
                  {/* {title} */}
                      <p className="f5 f4-ns mv0 blue">{title}</p>
                  </div>
              </div>
              <p className="f6 lh-copy measure mt2 mid-gray">
                 {/* {description} */}<a href={url} className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-blue pointer" target="_blank" rel="noopener noreferrer">Read More</a>
              </p>
          </div>
          <div>
          {/* <a href={url} className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-blue pointer" target="_blank" rel="noopener noreferrer">Read</a> */}
          </div>
          
      </article>  
  </div>
      );
    };

    
    export default NewsShow;
  