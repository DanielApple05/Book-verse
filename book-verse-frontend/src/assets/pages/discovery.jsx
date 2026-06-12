import React from 'react';
import Header from '../components/header-component/header';
import Footer from '../components/footerComponents/footer';
import SideNavBar from '../components/navigations/sideNavBar';
import DiscoveryPageCard from '../components/discovery-component/discoveryPageCard';
import MobileNavBar from '../components/navigations/mobileNavBar';

const Discover = () => {
  return (
    <>
      <Header />
      <div className='xl:flex block '>
        <SideNavBar />
        <DiscoveryPageCard />
      </div>
      <Footer />
      <MobileNavBar />
    </>
  );
}

export default Discover;
