import React from 'react';
import SideNavBar from '../components/sideNavBar';
import Header from '../components/header-component/header';
import HomeCard from '../components/index-component/homeCard'

const Home = () => {
  return (
    <>
     <Header/>
    <div className='flex w-full'>
        <SideNavBar />
        <HomeCard/>
    </div>
    </>
  );
}

export default Home;
