import React from 'react';
import FavoriteButton from '../button-component/favoriteBtn';
import { useLibrary } from '../../../context/libraryContext';
import { useNavigate } from 'react-router-dom';

const libraryBookCard = ({ book }) => {

  const { library, removeBook } = useLibrary();
  const navigate = useNavigate();

  return (
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
}

export default libraryBookCard;
