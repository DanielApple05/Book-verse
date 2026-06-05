import React from 'react';
import useLibrary from '../../../hooks/useLibrary';



const LibraryCard = () => {
 const { library } = useLibrary();
  console.log(library); // check what's in localStorage
  
  return (
    <div>
      <h1>My Library</h1>
      <p>{library.length} books</p>
    </div>
  );
};

export default LibraryCard;
