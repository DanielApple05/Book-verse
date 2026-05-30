import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBookById } from '../../apiBooks';

const ReadBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewerLoaded, setViewerLoaded] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [theme, setTheme] = useState('white');
  const [progress, setProgress] = useState(0);

  const themes = {
    white: 'bg-white text-gray-800',
    sepia: 'bg-[#F5ECD7] text-[#5C4A1E]',
    dark: 'bg-gray-900 text-gray-100',
  };

  const fontSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  // fetch book data
  useEffect(() => {
    const getBook = async () => {
      try {
        setLoading(true);
        const data = await fetchBookById(id);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, [id]);

  // load saved progress
  useEffect(() => {
    if (!book) return;
    const library = JSON.parse(localStorage.getItem('library') || '[]');
    const savedBook = library.find(b => b.id === id);
    if (savedBook) setProgress(savedBook.currentPage || 0);
  }, [book]);

  // load Google Books viewer
  useEffect(() => {
    if (!book) return;

    const script = document.createElement('script');
    script.src = 'https://books.google.com/books/previewlib.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.books.load();
      window.google.books.setOnLoadCallback(() => {
        const viewer = new window.google.books.DefaultViewer(
          document.getElementById('book-viewer')
        );

        const isbn = `ISBN:${book.volumeInfo.industryIdentifiers?.[0]?.identifier}`;

        viewer.load(
          isbn,
          () => setViewerLoaded(true), // ✅ isbn success
          () => {
            // fallback to google books id
            viewer.load(
              id,
              () => setViewerLoaded(true), // ✅ id success
              () => {
                setViewerLoaded(false); // ❌ both failed
                console.error('Book not available for preview');
              }
            );
          }
        );
      });
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [book]);

  // save progress to localStorage
  const saveProgress = (currentPage) => {
    const library = JSON.parse(localStorage.getItem('library') || '[]');
    const updatedLibrary = library.map(b => {
      if (b.id === id) {
        return {
          ...b,
          currentPage,
          progress: Math.round((currentPage / b.totalPages) * 100)
        };
      }
      return b;
    });
    localStorage.setItem('library', JSON.stringify(updatedLibrary));
    setProgress(currentPage);
  };

  if (loading) return (
    <div className='flex items-center justify-center h-screen'>
      <p className='text-gray-500 animate-pulse'>Loading book...</p>
    </div>
  );

  const info = book?.volumeInfo;

  return (
    <div className={`h-screen flex flex-col ${themes[theme]}`}>

      {/* Top bar */}
      <div className={`flex items-center justify-between px-6 py-3 border-b shadow-sm ${themes[theme]}`}>
        <button
          onClick={() => navigate(-1)}
          className='text-sm text-gray-500 cursor-pointer hover:text-gray-800'
        >
          ← Back
        </button>
        <div className='flex items-center gap-3'>
          <img
            src={info?.imageLinks?.thumbnail}
            className='w-6 h-8 rounded object-cover'
            alt={info?.title}
          />
          <p className='font-semibold text-sm'>{info?.title}</p>
        </div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className='text-sm text-gray-500 cursor-pointer hover:text-gray-800'
        >
          ⚙️ Aa
        </button>
      </div>

      {/* Settings panel */}
      {showSettings && (
        <div className='border-b border-gray-200 px-6 py-4 flex gap-10 items-center bg-white shadow-sm'>
          {/* Font size */}
          <div className='space-y-2'>
            <p className='text-xs text-gray-500 font-semibold'>Font Size</p>
            <div className='flex gap-2'>
              {['small', 'medium', 'large'].map(size => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-3 py-1 rounded-lg text-xs border ${
                    fontSize === size
                      ? 'bg-[#1B1F3B] text-white border-[#1B1F3B]'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div className='space-y-2'>
            <p className='text-xs text-gray-500 font-semibold'>Theme</p>
            <div className='flex gap-2'>
              {[
                { name: 'white', bg: 'bg-white border border-gray-300' },
                { name: 'sepia', bg: 'bg-[#F5ECD7]' },
                { name: 'dark', bg: 'bg-gray-900' },
              ].map(t => (
                <button
                  key={t.name}
                  onClick={() => setTheme(t.name)}
                  className={`w-8 h-8 rounded-full ${t.bg} ${
                    theme === t.name ? 'ring-2 ring-[#E8834A]' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reader area */}
      <div className={`flex-1 overflow-hidden relative ${themes[theme]}`}>
        {!viewerLoaded && (
          <div className='flex flex-col items-center justify-center h-full gap-4'>
            <img
              src={info?.imageLinks?.thumbnail}
              className='w-32 h-44 rounded-lg shadow-lg object-cover'
              alt={info?.title}
            />
            <p className='text-gray-500 text-sm'>Preview not available for this book</p>
            <a
              href={info?.previewLink}
              target='_blank'
              rel='noreferrer'
              className='bg-[#1B1F3B] text-white px-6 py-2 rounded-lg text-sm hover:bg-opacity-90'
            >
              Read on Google Books ↗
            </a>
          </div>
        )}
        <div
          id='book-viewer'
          className={fontSizes[fontSize]}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Bottom bar */}
      <div className={`flex items-center justify-between px-6 py-3 border-t ${themes[theme]}`}>
        <p className='text-xs text-gray-400'>by {info?.authors?.[0]}</p>

        {/* Progress */}
        <div className='flex items-center gap-3'>
          <input
            type='number'
            min={0}
            max={info?.pageCount}
            value={progress}
            onChange={(e) => saveProgress(Number(e.target.value))}
            className='w-16 text-center border border-gray-200 rounded-lg text-xs p-1 outline-none'
          />
          <span className='text-xs text-gray-400'>/ {info?.pageCount} pages</span>
          <div className='w-32 h-2 bg-gray-200 rounded-full'>
            <div
              className='h-2 bg-[#E8834A] rounded-full transition-all'
              style={{ width: `${Math.round((progress / info?.pageCount) * 100)}%` }}
            />
          </div>
          <span className='text-xs text-gray-400'>
            {Math.round((progress / info?.pageCount) * 100)}%
          </span>
        </div>

        <p className='text-xs text-gray-400'>{info?.pageCount} pages</p>
      </div>
    </div>
  );
};

export default ReadBook;