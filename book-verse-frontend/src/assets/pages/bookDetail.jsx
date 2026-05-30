import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBookById } from '../../apiBooks';
import Header from '../components/header-component/header';
import SideNavBar from '../components/navigations/sideNavBar';
import { Calendar, UserPen, NotebookText, Star } from 'lucide-react';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return (
    <div className='flex items-center justify-center h-screen'>
      <div className='animate-pulse space-y-4 w-96'>
        <div className='bg-gray-300 h-64 w-48 rounded-lg mx-auto'></div>
        <div className='bg-gray-300 h-6 w-3/4 rounded mx-auto'></div>
        <div className='bg-gray-300 h-4 w-1/2 rounded mx-auto'></div>
      </div>
    </div>
  );

  const info = book?.volumeInfo;

  return (
    <>
      <Header />
      <div className='xl:flex grid'>
        <SideNavBar />
        <div className='flex-1 p-8 mt-20'>

          <button
            onClick={() => navigate(-1)}
            className='text-sm text-gray-500 hover:text-gray-800 mb-6 flex items-center gap-2'
          >
            ← Back
          </button>

          <div className='xl:flex grid gap-10'>

            <div className='flex flex-col items-center gap-4'>
              <img
                src={info?.imageLinks?.thumbnail}
                alt={info?.title}
                className='w-48 h-64 rounded-lg shadow-xl object-cover'
              />
            </div>

            <div className='flex-1 space-y-4'>
              <h1 className='text-3xl font-bold text-[#1A1A2E]'>{info?.title.length > 50 ? info.title.substring(0, 50) + '...' : info.title}</h1>
              <p className='text-gray-500 text-sm'>by {info?.authors?.join(', ')}</p>

              <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
                {info?.pageCount && (
                  <span className='bg-gray-100 px-3 py-1 rounded-full'>
                    <NotebookText className='inline-block mr-2' /> {info.pageCount} pages
                  </span>
                )}
                {info?.publishedDate && (
                  <span className='bg-gray-100 px-3 py-1 rounded-full'>
                    <Calendar className='inline-block mr-2' /> {info.publishedDate}
                  </span>
                )}
                {info?.publisher && (
                  <span className='bg-gray-100 px-3 py-1 rounded-full'>
                    <UserPen className='inline-block mr-2' /> {info.publisher}
                  </span>
                )}
                {info?.averageRating && (
                  <span className='bg-amber-100 px-3 py-1 rounded-full'>
                    <Star className='inline-block mr-2' /> {info.averageRating} / 5
                  </span>
                )}
              </div>

              {info?.categories && (
                <div className='flex gap-2 flex-wrap'>
                  {info.categories.map((cat, i) => (
                    <span key={i} className='bg-[#F5E6D0] text-[#E8834A] text-xs px-3 py-1 rounded-full font-medium'>
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              <div>
                <h2 className='font-semibold text-lg mb-2'>About this book</h2>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {info?.description
                    ? info.description.replace(/<[^>]*>/g, '')
                    : 'No description available.'}
                </p>
              </div>
              <button
                onClick={() => navigate(`/read/${id}`)}
                className='bg-[#E8834A] text-white text-sm py-2 px-6 rounded-lg hover:bg-opacity-90 w-48'
              >
                Start Reading
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
