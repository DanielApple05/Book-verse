import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchBooks } from '../../apiBooks';
import Header from '../components/header-component/header';
import SideNavBar from '../components/navigations/sideNavBar';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        const data = await searchBooks(query);
        setBooks(data);
      } catch (error) {
        console.error('Error searching books:', error);
      } finally {
        setLoading(false);
      }
    };
    if (query) getBooks();
  }, [query]);

  return (
    <>
      <Header />
      <div className='xl:flex grid'>
        <SideNavBar />
        <div className='flex-1 p-8 mt-20'>
          <h1 className='text-2xl font-bold mb-6'>
            Results for "<span className='text-[#E8834A]'>{query}</span>"
          </h1>

          {loading ? (
            <div className='grid xl:grid-cols-5 grid-cols-2 gap-4'>
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className='animate-pulse'>
                  <div className='bg-gray-300 h-48 w-full rounded-lg mb-2'></div>
                  <div className='bg-gray-200 h-4 w-3/4 rounded mb-1'></div>
                  <div className='bg-gray-200 h-4 w-1/2 rounded'></div>
                </div>
              ))}
            </div>
          ) : books?.length === 0 ? (
            <p className='text-gray-500'>No books found for "{query}"</p>
          ) : (
            <div className='grid xl:grid-cols-5 grid-cols-2 gap-4'>
              {books?.map(book => (
                <div
                  key={book.id}
                  onClick={() => navigate(`/book/${book.id}`)}
                  className='cursor-pointer ring ring-amber-100 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1'
                >
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    className='w-full h-48 rounded-t-lg object-cover'
                  />
                  <div className='bg-amber-100 p-2'>
                    <p className='text-xs font-semibold'>{book.volumeInfo.title}</p>
                    <p className='text-xs text-gray-500'>{book.volumeInfo.authors?.[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;