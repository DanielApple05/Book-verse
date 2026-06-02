import RecommendedBooks from '../book-components/recommendedBooks';
import TrendingBooks from '../book-components/trendingBooks';
import NewArrivals from '../book-components/newArrivals';
import Categories from '../category-component/categories';
import Banner1 from '../explore-banner/banner1';
import Search from '../search'
import { jwtDecode } from 'jwt-decode';

const HomeCard = () => {
  const token = localStorage.getItem('token');
  const isValidToken = token && token !== 'undefined' && token.split('.').length === 3;
  const user = isValidToken ? jwtDecode(token) : null;
 const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}; 

  return (

    <div className='p-5 xl:mt-20 mt-15 w-full text-black '>
      <div className='xl:hidden flex mb-3 bg-white/30 sticky top-14 rounded-lg '> <Search /> </div>
      <h1 className='text-2xl font-semibold text-slate-900 dark:text-white'>{getGreeting()}, {user?.username || 'User'}</h1>
      <p className='text-sm text-slate-600 dark:text-slate-300'>Let's continue your reading.</p>
      <RecommendedBooks />
      <Categories />
      <TrendingBooks />
      <NewArrivals />
      <Banner1 />
    </div>
  );
}

export default HomeCard;
