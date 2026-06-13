import { createContext, useContext, useState, useEffect } from 'react';

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('library') || '[]');
    setLibrary(saved);
  }, []);

  const addBook = (book, status) => {
    const exists = library.find(b => b.id === book.id);
    let updated;

    if (exists) {
      updated = library.map(b => b.id === book.id ? { ...b, status } : b);
    } else {
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

  const updateProgress = (bookId, currentPage) => {
    const updated = library.map(b => {
      if (b.id === bookId) {
        return {
          ...b,
          currentPage,
          progress: Math.round((currentPage / b.totalPages) * 100),
          lastRead: new Date().toISOString(),
          status: 'currently_reading'
        };
      }
      return b;
    });
    localStorage.setItem('library', JSON.stringify(updated));
    setLibrary(updated);
  };

  const toggleFavorite = (bookId, book) => {
    if (!library.some(b => b.id === bookId)) return addBook(book, 'favorite');
    const updated = library.map(b => {
      if (b.id === bookId) {
        return {
          ...b,
          status: b.status === 'favorite' ? 'want_to_read' : 'favorite'
        };
      }
      return b;
    });
    localStorage.setItem('library', JSON.stringify(updated));
    setLibrary(updated);
  };

  const removeBook = (bookId) => {
    const updated = library.filter(b => b.id !== bookId);
    localStorage.setItem('library', JSON.stringify(updated));
    setLibrary(updated);
  };

  const clearLibrary = () => {
  localStorage.removeItem('library');
  setLibrary([]);
};

  // filtered lists
  const favorites = library.filter(b => b.status === 'favorite');
  const currentlyReading = library.filter(b => b.status === 'currently_reading');
  const completed = library.filter(b => b.status === 'completed');
  const wantToRead = library.filter(b => b.status === 'want_to_read');
  const lastRead = [...library]
    .filter(b => b.lastRead)
    .sort((a, b) => new Date(b.lastRead) - new Date(a.lastRead))
    .slice(0, 5);

  return (
    <LibraryContext.Provider value={{
      library,
      favorites,
      currentlyReading,
      completed,
      wantToRead,
      lastRead,
      addBook,
      updateProgress,
      toggleFavorite,
      removeBook,
      clearLibrary,
    }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => useContext(LibraryContext);