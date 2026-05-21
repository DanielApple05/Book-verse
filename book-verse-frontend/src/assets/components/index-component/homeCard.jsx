
import axios from 'axios';
import { useState, useEffect } from "react";
import { fetchRecommendedBooks } from '../../../../apiBooks';

const HomeCard = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);
  const [recommendedBooks, setRecommendedBooks] = useState({})

  useEffect(() => {
    const getRecommended = async () => {
      try {
        setLoading(true)
        const allRecommended = await fetchRecommendedBooks()
        setRecommendedBooks(allRecommended)
      } catch (error) {
        { message: "failed to fetch recommended", error }
      } finally {
        setLoading(false)
      }
    };
    getRecommended();
  }, []);

  return (
    <>
      <div className=' p-5 w-full mt-20'>
        <h1 className='text-2xl font-semibold'>Good day User</h1>
        <p>Let's continue your reading.</p>
      </div>
    </>
  );
}

export default HomeCard;
