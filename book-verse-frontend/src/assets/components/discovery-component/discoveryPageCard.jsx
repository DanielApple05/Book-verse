import React from 'react';
import Header from '../header-component/header';
import Banner3 from '../explore-banner/banner3';
import Search from '../search';
import TrendingBooks  from '../book-components/trendingBooks';
import NewArrivals from '../book-components/newArrivals';
import Categories from '../category-component/categories';

const DiscoveryPageCard = () => {
  return (
    <div>
     <div className='xl:hidden flex mb-3 bg-white/30 sticky top-14 rounded-lg '> <Search /> </div>
     <h1 className='text-2xl font-bold mb-2'>Discover New Books</h1>
     <p className='text-gray-500 mb-10'>Explore our curated selection of books across various genres and categories. Find your next great read today!</p>
      <Banner3/>
      <Categories />
      <TrendingBooks />
      <NewArrivals />
    </div>
  );
}

export default DiscoveryPageCard;
