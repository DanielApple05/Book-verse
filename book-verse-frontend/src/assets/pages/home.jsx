import React from 'react';
import SideNavBar from '../components/navigations/sideNavBar';
import Header from '../components/header-component/header';
import HomeCard from '../components/home-component/homeCard'
import Footer from '../components/footer'
import MobileNavBar from '../components/navigations/mobileNavBar';

const Home = () => {
  return (
    <>
      <Header />
      <div className='xl:flex block flex-row'>
        <SideNavBar />
        <HomeCard />
      </div>
      <MobileNavBar />
      <Footer />
    </>
  );
}

export default Home;
