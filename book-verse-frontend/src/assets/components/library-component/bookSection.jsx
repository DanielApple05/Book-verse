import React from 'react';
import LibraryBookCard from './libraryBookCard';

const BookSection = ({ title, books }) => {
  if (books.length === 0) return null;
  return (
    <div className='mb-8'>
      <h2 className='text-lg font-semibold mb-4'>{title}</h2>
      <div className='grid xl:grid-cols-5 grid-cols-2 gap-4'>
        {books.map(book => <LibraryBookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default BookSection;
