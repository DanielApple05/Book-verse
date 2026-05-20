import React from 'react';
import SideNavBar from '../components/sideNavBar';
import Header from '../components/header-component/header';
import LibraryCard from '../components/library-component/libraryCard'


const Library = () => {
  return (
    <>
     <Header/>
    <div className='flex w-full'>
        <SideNavBar />
        <LibraryCard />
    </div>
    </>
  );
}

export default Library;
