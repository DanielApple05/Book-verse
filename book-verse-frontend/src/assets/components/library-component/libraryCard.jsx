import React, { useState } from 'react';
import { useLibrary } from '../../../context/libraryContext';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../button-component/favoriteBtn';

const tabs = ['All Books', 'Currently Reading', 'Want to Read', 'Completed', 'Favorites'];

const LibraryCard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Books');
  const { library, favorites, currentlyReading, completed, wantToRead, removeBook } = useLibrary();

  const bookCollections = {
    'Currently Reading': currentlyReading,
    'Want to Read': wantToRead,
    'Completed': completed,
    'Favorites': favorites,
  };

  const BookCard = ({ book }) => (
    <div className='bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-1 transition-all'>
      <img
        src={book.thumbnail}
        alt={book.title}
        onClick={() => navigate(`/book/${book.id}`)}
        className='w-full h-40 object-cover cursor-pointer'
      />
      <div className='p-2'>
        <p className='text-xs font-semibold truncate'>{book.title}</p>
        <p className='text-xs text-gray-500 truncate'>{book.author}</p>
        {book.status === 'currently_reading' && (
          <div className='mt-2'>
            <div className='w-full h-1 bg-gray-200 rounded-full'>
              <div className='h-1 bg-[#E8834A] rounded-full' style={{ width: `${book.progress}%` }} />
            </div>
            <p className='text-xs text-gray-400 mt-1'>{book.progress}% complete</p>
          </div>
        )}
      </div>
      <div className='flex items-center justify-between m-2'>
        <FavoriteButton book={book} />
        <button onClick={() => removeBook(book.id)} className='text-xs text-red-400 hover:text-red-600'>
          Remove
        </button>
      </div>
    </div>
  );

  const BookSection = ({ title, books }) => {
    if (books.length === 0) return null;
    return (
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-4'>{title}</h2>
        <div className='grid xl:grid-cols-5 grid-cols-2 gap-4'>
          {books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    );
  };

  return (
    <div className='bg-white rounded-lg shadow-xl p-5 mt-5 dark:bg-gray-800'>
      {/* Tabs */}
      <div className='xl:flex grid grid-cols-2 gap-2 my-6 overflow-x-auto'>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${activeTab === tab
                ? 'dark:bg-[#2e3355] bg-[#1B1F3B] text-white'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className='grid xl:grid-cols-4 grid-cols-2 gap-4 mb-8'>
        {[
          { label: 'Total Books', value: library.length, bg: 'bg-blue-50', text: 'text-blue-500' },
          { label: 'Currently Reading', value: currentlyReading.length, bg: 'bg-orange-50', text: 'text-orange-500' },
          { label: 'Completed', value: completed.length, bg: 'bg-green-50', text: 'text-green-500' },
          { label: 'Favorites', value: favorites.length, bg: 'bg-red-50', text: 'text-red-500' },
        ].map(stat => (
          <div key={stat.label} className={`${stat.bg} rounded-lg p-4 shadow-xl dark:bg-gray-950`}>
            <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>
            <p className='text-xs text-gray-500 dark:text-white mt-1'>{stat.label}</p>
          </div>
        ))}
      </div>

      {activeTab === 'All Books' ? (
        library.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-48 text-gray-400'>
            <p className='text-lg'>No books here yet</p>
            <button onClick={() => navigate('/home')} className='mt-3 text-sm text-[#E8834A]'>
              Explore books →
            </button>
          </div>
        ) : (
          <>
            <BookSection title='Currently Reading ' books={currentlyReading} />
            <BookSection title='Want to Read ' books={wantToRead} />
            <BookSection title='Completed ' books={completed} />
            <BookSection title='Favorites ' books={favorites} />
          </>
        )
      ) : (
      
        bookCollections[activeTab]?.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-48 text-gray-400'>
            <p className='text-lg'>No books here yet</p>
            <button onClick={() => navigate('/home')} className='mt-3 text-sm text-[#E8834A]'>
              Explore books →
            </button>
          </div>
        ) : (
          <div className='grid xl:grid-cols-5 grid-cols-2 gap-4'>
            {bookCollections[activeTab]?.map(book => <BookCard key={book.id} book={book} />)}
          </div>
        )
      )}
    </div>
  );
};

export default LibraryCard;
