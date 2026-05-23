import RecommendedBooks from '../book-components/recommendedBooks';
import TrendingBooks from '../book-components/trendingBooks';
import NewArrivals from '../book-components/newArrivals';
import Categories from '../category-component/categories';
import Banner1 from '../explore-banner/banner1';

const HomeCard = () => {

  return (
    
      <div className='p-5 mt-20 '>
        <h1 className='text-2xl font-semibold'>Good day User</h1>
        <p>Let's continue your reading.</p>
        <RecommendedBooks />
        <Categories />
        <TrendingBooks />
        <NewArrivals />
        <Banner1 />
      </div>
  
  );
}

export default HomeCard;
