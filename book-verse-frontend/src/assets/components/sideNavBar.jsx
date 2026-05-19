import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Tabs from './navTabs';
import { NavLink } from "react-router-dom";

const SideNavBar = () => {
  const [books, setBooks] = useState([]);
  const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_KEY;

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=fiction&key=${API_KEY}`
      );
      const data = await response.json();
      setBooks(data.items);
      console.log(fetchBooks)
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
              `flex items-center gap-6 rounded-lg p-2 font-semibold text-xl ${
                isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
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
