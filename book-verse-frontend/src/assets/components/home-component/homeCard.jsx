import RecommendedBooks from '../recommendedBooks';
import TrendingBooks from '../trendingBooks'; 

const HomeCard = () => {

  return (
    <>
      <div className='p-5 mt-20 w-full'>
        <h1 className='text-2xl font-semibold'>Good day User</h1>
        <p>Let's continue your reading.</p>
         <RecommendedBooks />
         <TrendingBooks />
      </div>
    </>
  );
}

export default HomeCard;
