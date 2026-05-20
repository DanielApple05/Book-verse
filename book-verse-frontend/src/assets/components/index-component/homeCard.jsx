
// import axios from 'axios';
// import { useState, useEffect } from "react";

// const HomeCard = () => {
//   const [books, setBooks] = useState({});
//   const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
//   const [loading, setLoading] = useState(true);

//   const categories = ['fiction', 'nonfiction', 'science', 'history', 'biography', 'fantasy', 'romance', 'thriller'];

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         setLoading(true)
//         const requests = categories.map(category =>
//           axios.get(`https://www.googleapis.com/books/v1/volumes`, {
//             params: {
//               q: `subject:${category}`,
//               key: API_KEY,
//               maxResults: 5
//             }
//           })
//         );

//         const responses = await Promise.all(requests);

//         const allBooks = responses.reduce((acc, response, index) => {
//           acc[categories[index]] = response.data.items;
//           return acc;
//         }, {});

//         console.log(allBooks);
//         setBooks(allBooks);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       } finally {
//         setLoading(false)
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <>
//       <div className='w-full p-5 '>
//         {loading ? (
//           <div className='grid grid-cols-4 gap-4 p-4'>
//             {Array(8).fill(0).map((_, i) => (
//               <div key={i} className='animate-pulse'>
//                 <div className='bg-gray-600 h-48 w-full rounded-lg mb-2'></div>
//                 <div className='bg-gray-200 h-4 w-3/4 rounded mb-1'></div>
//                 <div className='bg-gray-200 h-4 w-1/2 rounded'></div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           Object.entries(books).map(([category, items]) => (
//             <div key={category} className='w-full grid space-y-3 mt-5'>
//               <h2>{category.toUpperCase()}</h2>
//               <div className='flex gap-4'>
//                 {items?.map(book => (
//                   <div key={book.id} className='w-full ring ring-amber-100 rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer'>
//                     <img src={book.volumeInfo.imageLinks?.thumbnail} className='w-full h-40' />
//                   <p className='text-xs py-4 pl-2'>{book.volumeInfo.authors?.[0]}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// }

// export default HomeCard;
