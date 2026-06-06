import React from 'react';
import { useState, useEffect } from "react";
import { fetchNewArrivals } from '../../../apiBooks';
import { useNavigate } from 'react-router-dom';
import useLibrary from '../../../hooks/useLibrary';
import FavoriteButton from '../button-component/favoriteBtn';

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { library, toggleFavorite } = useLibrary();

  const isFavorite = (bookId) =>
    library.some(
      book =>
        book.id === bookId &&
        book.status === 'favorite'
    );

  useEffect(() => {
    const getNewArrivals = async () => {
      setLoading(true);
      try {
        const arrivals = await fetchNewArrivals();
        setNewArrivals(arrivals);
      } catch (error) {
        console.error('failed to fetch new arrivals', error);
      } finally {
        setLoading(false);
      }
    };
    getNewArrivals();
  }, []);

  return (
    <div className='w-full dark:text-white text-black '>
      <h1 className='text-lg font-semibold my-6'>New Arrivals</h1>
      {loading ? (
        <div className='gap-4  xl:flex grid grid-cols-2 w-full'>
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className='w-full sm:w-1/2 xl:w-1/3 2xl:w-1/4 ring ring-amber-100 rounded-lg shadow-xl animate-pulse'>
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
          {newArrivals.map((item) => (
            <div
              onClick={() => navigate(`/book/${item.id}`)}
              key={item.id} className='w-full sm:w-1/2 xl:w-1/3 2xl:w-1/4 ring ring-amber-100 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer dark:bg-gray-800'>
              <img src={item.volumeInfo.imageLinks?.thumbnail} className='w-full h-40 rounded-t-lg' />
              <div className='p-2 text-xs space-y-3 '>
                <h2 className='text-sm font-semibold'>{item.volumeInfo.authors?.[0]}</h2>
                <p>{item.volumeInfo.title.substring(0, 30)}...</p>
              </div>
              <div>
                <FavoriteButton
                  book={{
                    ...item,
                    status: isFavorite(item.id)
                      ? 'favorite'
                      : null
                  }}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewArrivals;
