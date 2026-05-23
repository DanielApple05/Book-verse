import { useState, useEffect } from "react";
import { fetchAllCategories } from "../../../apiBooks";
import Banner2 from "../explore-banner/banner2";

const CategoryCard = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        const allBooks = await fetchAllCategories();
        setBooks(allBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  return (
    <div className=''>
      {loading ? (
        <div className='grid grid-cols-5 gap-4 mt-10'>
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className='animate-pulse'>
              <div className='bg-gray-600 h-48 w-full rounded-lg mb-2'></div>
              <div className='bg-gray-200 h-4 w-3/4 rounded mb-1'></div>
              <div className='bg-gray-200 h-4 w-1/2 rounded'></div>
            </div>
          ))}
        </div>
      ) : (
        Object.entries(books).map(([category, items]) => (
          <div key={category} className='w-full grid space-y-3 mt-5'>
            <h2 className='font-semibold'>{category.toUpperCase()}</h2>
            <div className='flex gap-4'>
              {items?.map(book => (
                <div key={book.id} className='w-full ring ring-amber-100 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer grid'>
                  <img src={book.volumeInfo.imageLinks?.thumbnail} className='w-full h-40 rounded-t-lg' />
                  <div className='bg-amber-100'>
                    <p className='text-xs py-4 pl-2'>{book.volumeInfo.authors?.[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
      <Banner2/>
    </div>
  );
};

export default CategoryCard;