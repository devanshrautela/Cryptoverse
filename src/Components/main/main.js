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
            <div className="currentprices">
                < CurrentPrice/> 
            </div>
            <div className='app_posts '>
                <Posts/>
            </div>
            <div className="app_news">
                <News/>
            </div>
            
        </div>
        </>      
    )
};

export default Main;