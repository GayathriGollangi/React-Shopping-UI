import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import { Gents,Ladies } from './data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {
  console.log(Gents);
  const [gentsFashion,setGentsFashion] = useState(Gents);
  const [womensFashion,setWomensFashion] = useState(Ladies);
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashion={gentsFashion}/>
      <WomenCollection womensFashion = {womensFashion}/>
      <Footer/>
    </div>
  )
}

export default MainPage
