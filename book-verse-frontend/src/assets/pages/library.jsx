import React from 'react';
import SideNavBar from '../components/navigations/sideNavBar';
import Header from '../components/header-component/header';
import Footer from '../components/footerComponents/footer';
import MobileNavBar from '../components/navigations/mobileNavBar';
import LibraryCard from '../components/library-component/libraryCard';
import { getToken } from '../../helpers';

const Library = () => {
  const Token = getToken();
  const isLoggedIn = !!Token
  return (
    <>
      <Header />
      <div className='xl:flex block'>
        <SideNavBar />
        <div className='xl:mt-20 mt-16 p-5 w-full '>
          <p className='text-2xl font-bold'>My Library</p>
          <p>All your books in one place</p>
           <LibraryCard />
        </div>
      </div>
     { isLoggedIn && <Footer/> }
      <MobileNavBar />
    </>
  );
}

export default Library;
