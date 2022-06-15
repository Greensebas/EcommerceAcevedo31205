import React from 'react'
import HeroContainer from '../Hero/HeroContainer';
// import ItemDetailContainer from '../ItemList/ItemDetailContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import Banner from '../ItemList/Banner';

function Home() {
  return (
    <div>
    <Banner />
    <ItemListContainer />
    <HeroContainer />

  </div>
  )
}

export default Home

// <ItemDetailContainer />