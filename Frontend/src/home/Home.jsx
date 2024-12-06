import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Freebook from '../components/Freebook'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
      <div className="dark:bg-slate-900 dark:text-white">
  <Navbar/>
  <Banner/>
  <Freebook/>
  <Footer/>
</div>
  
   </div>
  )
}

export default Home
