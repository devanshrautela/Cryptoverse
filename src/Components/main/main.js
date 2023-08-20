import React from 'react';
import Posts from '../posts/posts';
import './main.css';
import CurrentPrice from '../currentprice/currentprice';
import News from '../news/news';
import Header from '../header/header';
const Main=()=>{
    return (
    <>
        <Header/>
        <div className='app__page'>
             <div className="CurrentPriceCss  ml1 mr1">   < CurrentPrice/> </div>

             
            <div className='app_posts '>
                <Posts/>
            </div>
            <div className='NewsCSS mr1 ml1'><News/></div> 
        </div>
        </>      
    )
};

export default Main;