
import axios from 'axios';
import { useState, useEffect } from "react";
import { fetchRecommendedBooks } from '../../../../apiBooks';

const HomeCard = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);
  const [recommendedBooks, setRecommendedBooks] = useState([])

  useEffect(() => {
    const getRecommended = async () => {
      try {
        setLoading(true);
        const allRecommended = await fetchRecommendedBooks();
        setRecommendedBooks(allRecommended);
      } catch (error) {
        console.error('failed to fetch recommended books', error);
      } finally {
        setLoading(false);
      }
    };
    getRecommended();
  }, []);

  
  return (
    <>
      <div className=' p-5 w-full mt-20'>
        <h1 className='text-2xl font-semibold'>Good day User</h1>
        <p>Let's continue your reading.</p>
       <div>
        <h1 className='text-xl font-semibold my-4'>Recommended Books</h1>
         <div className=' gap-4 flex w-full'>
          {recommendedBooks?.map((item) => (
            <div key={item.id} className='w-full ring ring-amber-100 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer'>
              <img src={item.volumeInfo.imageLinks?.thumbnail}  className='w-full h-40 rounded-t-lg'  />
              <p className='p-2'>{item.volumeInfo.title}</p>
            </div>
          ))}
        </div>
       </div>
      </div>
    </>
  );
}

export default HomeCard;
