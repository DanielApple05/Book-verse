import React from 'react';
import Header from '../components/header-component/header';
import Footer from '../components/footer';
import SideNavBar from '../components/navigations/sideNavBar';
import DiscoveryPageCard from '../components/discovery-component/discoveryPageCard';
import MobileNavBar from '../components/navigations/mobileNavBar';

const Discover = () => {
  return (
      <>
      <Header />
      <div className='flex w-full'>
        <SideNavBar />
        <div className=' mt-20 p-5 w-full '>
           <DiscoveryPageCard />
        </div>
      </div>
      <Footer/>
      <MobileNavBar />
    </>
  );
}

export default Discover;
