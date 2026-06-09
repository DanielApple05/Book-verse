import React from 'react';
import SideNavBar from '../components/navigations/sideNavBar';
import Header from '../components/header-component/header';
import Footer from '../components/footerComponents/footer';
import MobileNavBar from '../components/navigations/mobileNavBar';

const Authors = () => {
  return (
    <>
      <Header />
      <div className='xl:flex block flex-row'>
        <SideNavBar />
        <div className='w-full  flex items-center justify-center h-screen font-bold xl:text-6xl text-4xl ' >
          <h1>Coming Soon</h1>
        </div>
      </div>
      <Footer />
      <MobileNavBar />
    </>
  );
}

export default Authors;
