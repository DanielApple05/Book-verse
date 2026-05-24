import React from 'react';
import Header from '../header-component/header';
import Banner3 from '../explore-banner/banner3';
import Search from '../search';

const DiscoveryPageCard = () => {
  return (
    <div>
         <div className='xl:hidden flex mb-3 bg-white/30 sticky top-14 rounded-lg '> <Search /> </div>
      <Banner3/>
    </div>
  );
}

export default DiscoveryPageCard;
