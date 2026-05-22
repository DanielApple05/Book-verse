import React from 'react';
import SideNavBar from '../components/sideNavBar';
import Header from '../components/header-component/header';
import HomeCard from '../components/home-component/homeCard'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
     <Header/>
    <div className='flex w-full'>
        <SideNavBar />
        <HomeCard />
    </div>
    <Footer/>
    </>
  );
}

export default Home;
