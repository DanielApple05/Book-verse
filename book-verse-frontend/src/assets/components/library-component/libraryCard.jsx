import React, { useState } from 'react';
import { useLibrary } from '../../../context/libraryContext';
import { useNavigate } from 'react-router-dom';
import LibraryBookCard from './libraryBookCard';
import BookSection from './bookSection';

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
            {bookCollections[activeTab]?.map(book => <LibraryBookCard key={book.id} book={book} />)}
          </div>
        )
      )}
    </div>
  );
};

export default LibraryCard;
