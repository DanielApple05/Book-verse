import React from 'react';
import useLibrary from '../../../hooks/useLibrary';



const LibraryCard = () => {
 const { library } = useLibrary();
  
  return (
    <div className='bg-white rounded-lg shadow-xl p-5 mt-5 h-screen'>
      <h1>My Library</h1>
      <p>{library.length} books</p>
    </div>
  );
};

export default LibraryCard;
