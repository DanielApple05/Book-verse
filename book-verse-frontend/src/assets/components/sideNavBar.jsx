import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Tabs from './navTabs';
import { NavLink } from "react-router-dom";
import axios from 'axios'

const SideNavBar = () => {
  const [books, setBooks] = useState([]);
  const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_KEY;

 useEffect(() => {
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: 'fiction',
            key: API_KEY
          }
        }
      );
      setBooks(response.data.items);
      console.log(response.data.items); // ✅
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  fetchBooks();
}, []);


  return (
    <div className='w-2/12 h-screen bg-[#F9F6F1] flex justify-center'>
      <div className="space-y-4 p-4">
        {Tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={tab.path}
            className={({ isActive }) =>
              `flex items-center gap-6 rounded-lg p-2 font-semibold text-xl hover:bg-blue-300  ${
                isActive ? 'bg-blue-500 text-white' : ' text-gray-700'
              }`
            }
          >
            <FontAwesomeIcon icon={tab.icon} className="text-xl" />
            <span>{tab.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideNavBar;
