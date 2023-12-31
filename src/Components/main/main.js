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
            < CurrentPrice/> 
            <div className='app_posts '>
                <Posts/>
            </div>
            <News/>
        </div>
        </>      
    )
};

export default Main;