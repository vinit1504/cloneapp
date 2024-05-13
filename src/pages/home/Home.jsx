import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './tranding/Trending';
import Popular from './popular/Popular';
import Toprated from './toprated/TopRated';

const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <Toprated />
      
      
      
    </div>
  )
}

export default Home
