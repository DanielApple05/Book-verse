import React from 'react';
import { fetchTrendingBooks } from '../../../apiBooks';
import { useState, useEffect } from "react";


const TrendingBooks = () => {

  const [trendingBooks, setTrendingBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrending = async () => {
      setLoading(true);
      try {
        const trending = await fetchTrendingBooks();
        setTrendingBooks(trending);
      } catch (error) {
        console.error('failed to fetch trending books', error);
      } finally {
        setLoading(false);
      }
    }
    getTrending();
  }, []);

  return (
    <div className=''>
      <h1 className='text-lg font-semibold my-6'>Trending Books</h1>
      {loading ? (
        <div className='gap-4 flex w-full'>
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className='w-full ring ring-amber-100 rounded-lg shadow-xl animate-pulse'>
              <div className='w-full h-40 bg-gray-300 rounded-t-lg'></div>
                <div className='p-2 py-4'>
                  <div className='h-3 bg-gray-300 rounded w-3/4 mb-2'></div>
                  <div className='h-3 bg-gray-300 rounded w-1.5/2'></div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex gap-4 w-full'>
          {trendingBooks.map((book) => (
            <div key={book.id} className='w-full ring ring-amber-100 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer'>
              <img src={book.volumeInfo.imageLinks?.thumbnail} className='w-full h-40 rounded-t-lg' />
              <div className='p-2 text-xs space-y-3'>
                <h2 className='text-sm font-semibold'>{book.volumeInfo.authors?.[0]}</h2>
                <p>{book.volumeInfo.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendingBooks;
