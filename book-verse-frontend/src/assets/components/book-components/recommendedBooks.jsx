
import { useState, useEffect } from "react";
import { fetchRecommendedBooks } from '../../../apiBooks';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../button-component/favoriteBtn';

const RecommendedBooks = () => {
  const [loading, setLoading] = useState(true);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getRecommended = async () => {
      try {
        setLoading(true);
        const allRecommended = await fetchRecommendedBooks();
        setRecommendedBooks(allRecommended);
      } catch (error) {
        console.error('failed to fetch recommended books', error);
      } finally {
        setLoading(false);
      }
    };
    getRecommended();
  }, []);

  return (
    <div className='w-full dark:text-white text-black'>
      <h1 className='text-lg font-semibold my-6'>Recommended Books For You</h1>
      {loading ? (
        <div className='gap-4 xl:flex grid grid-cols-2 w-full'>
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className='w-full ring ring-amber-100 rounded-lg shadow-xl animate-pulse'>
              <div className='w-full h-40 bg-gray-300 rounded-t-lg'></div>
              <div className='p-2 py-4'>
                <div className='h-3 bg-gray-300 rounded w-3/4 mb-2'></div>
                <div className='h-3 bg-gray-300 rounded w-1/2'></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='xl:flex grid grid-cols-2 gap-4 w-full'>
          {recommendedBooks?.map((item) => (
            <div key={item.id} className='w-full ring ring-amber-100 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800'>
              <img
                src={item.volumeInfo.imageLinks?.thumbnail}
                onClick={() => navigate(`/book/${item.id}`)}
                className='w-full xl:h-40 h-28 rounded-t-lg cursor-pointer'
              />
              <div
                onClick={() => navigate(`/book/${item.id}`)}
                className='p-2 text-xs space-y-3 grid' >
                <h2 className='text-sm font-semibold'>{item.volumeInfo.authors?.[0]}</h2>
                <p>{item.volumeInfo.title}</p>
                <div>
                  <FavoriteButton book={item} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedBooks;
