import axios from 'axios';

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// fetch books by category
export const fetchBooksByCategory = async (category, maxResults = 5) => {
  const response = await axios.get(BASE_URL, {
    params: { q: `subject:${category}`, key: API_KEY, maxResults }
  });
  return response.data.items;
};

// fetch all categories
export const fetchAllCategories = async () => {
  const categories = ['fiction', 'nonfiction', 'science', 'history', 'biography', 'fantasy', 'romance', 'thriller'];
  const allBooks = {};

  for (const category of categories) {
    const response = await axios.get(BASE_URL, {
      params: { q: `subject:${category}`, key: API_KEY, maxResults: 20 }
    });
    allBooks[category] = response.data.items;
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  return allBooks;
};

// search books by query
export const searchBooks = async (query, maxResults = 20) => {
  const response = await axios.get(BASE_URL, {
    params: { q: query, key: API_KEY, maxResults }
  });
  return response.data.items;
};

// fetch single book by id
export const fetchBookById = async (bookId) => {
  const response = await axios.get(`${BASE_URL}/${bookId}`, {
    params: { key: API_KEY }
  });
  return response.data;
};

// fetch recommended books
export const fetchRecommendedBooks = async (author = 'fiction', category = 'fiction', maxResults = 5) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: `subject:${category} OR inauthor:${author}`,
      key: API_KEY,
      maxResults
    }
  });
  return response.data.items;
};

// fetch trending/popular books
export const fetchTrendingBooks = async (maxResults = 5) => {
  const response = await axios.get(BASE_URL, {
    params: { q: 'bestseller', key: API_KEY, maxResults, orderBy: 'relevance' }
  });
  return response.data.items;
};

// fetch new arrivals
export const fetchNewArrivals = async (maxResults = 5) => {
  const response = await axios.get(BASE_URL, {
    params: { q: 'a', key: API_KEY, maxResults, orderBy: 'newest' }
  });
  return response.data.items;
};