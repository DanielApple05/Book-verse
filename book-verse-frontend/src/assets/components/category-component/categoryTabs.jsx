import { faBookOpen, faBook, faFlask, faLandmark, faUser, faDragon, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const categoryTabs = [
  { id: 1, tab: 'fiction', icon: faBookOpen },
  { id: 2, tab: 'nonfiction', icon: faBook },
  { id: 3, tab: 'science', icon: faFlask },
  { id: 4, tab: 'history', icon: faLandmark },
  { id: 5, tab: 'biography', icon: faUser },
  { id: 6, tab: 'fantasy', icon: faDragon },
  { id: 7, tab: 'romance', icon: faHeart },
  { id: 8, tab: 'thriller', icon: faMagnifyingGlass },
];

const iconColors = [
  'bg-[#F5E6D0] text-[#E8834A]',
  'bg-[#D6EAD8] text-green-600',
  'bg-[#E8E4F5] text-purple-500',
  'bg-[#F5E0E0] text-red-400',
  'bg-[#E6F1FB] text-blue-500',
  'bg-[#FAEEDA] text-yellow-600',
  'bg-pink-100 text-pink-500',
  'bg-gray-100 text-gray-600',
];

export {categoryTabs, iconColors}; 
