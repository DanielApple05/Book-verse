import RecommendedBooks from '../recommendedBooks';

const HomeCard = () => {

  return (
    <>
      <div className='p-5 mt-20 w-full'>
        <h1 className='text-2xl font-semibold'>Good day User</h1>
        <p>Let's continue your reading.</p>
         <RecommendedBooks />
      </div>
    </>
  );
}

export default HomeCard;
