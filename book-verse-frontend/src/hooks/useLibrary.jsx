import { useState, useEffect } from 'react';

const useLibrary = () => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('library') || '[]');
    setLibrary(saved);
  }, []);

  const addBook = (book, status) => {
    const exists = library.find(b => b.id === book.id);
    let updated;

    if (exists) {
      // update status if already in library
      updated = library.map(b => b.id === book.id ? { ...b, status } : b);
    } else {
      // add new book
      updated = [...library, {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.[0],
        thumbnail: book.volumeInfo.imageLinks?.thumbnail,
        totalPages: book.volumeInfo.pageCount,
        currentPage: 0,
        progress: 0,
        status,
        dateAdded: new Date().toISOString(),
        lastRead: null,
      }];
    }

    localStorage.setItem('library', JSON.stringify(updated));
    setLibrary(updated);
  };

  return {
    library,
    addBook,
  };
};

export default useLibrary;