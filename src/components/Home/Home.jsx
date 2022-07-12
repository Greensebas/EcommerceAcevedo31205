import React from 'react'
import HeroContainer from '../Hero/HeroContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import Banner from '../ItemList/Banner';
import "./home.css";

function Home() {
  return (
    <div>
      <div className='top-nav'></div>
    <Banner />
    <ItemListContainer />
    <HeroContainer />

  </div>
  )
}

export default Home

