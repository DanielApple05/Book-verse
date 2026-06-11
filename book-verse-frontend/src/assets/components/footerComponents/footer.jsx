import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {

  const navLinks = [{ id: 1, tab: 'Home', path: '/home' }, { id: 2, tab: 'Features', path: '/discovery' }, { id: 3, tab: 'Categories', path: '/category' }, { id: 4, tab: 'Pricing', path: '/library' }];
  const companyLinks = [{ id: 1, links: 'About Us', path: '/settings' }, { id: 2, links: 'Blog', path: '/library' }, { id: 3, links: 'Careers', path: '/home' }, { id: 4, links: 'Contact', path: '/contact' }];


  return (
    <div className=' dark:bg-gray-800 bg-[#FAF7F2] dark:text-gray-100 text-black border-t w-full border-gray-200 xl:px-16 px-3 xl:py-10 py-5 xl:mb-0 mb-15 '>
      <div className='xl:flex grid grid-cols-3 justify-between'>
        <div className='space-y-3 max-w-xs'>
          <div className='flex items-center font-bold space-x-2'>
            <FontAwesomeIcon icon={faBookOpen} className='text-[#1A1A2E] dark:text-gray-100' />
            <p className='xl:text-base text-xs'> BookVerse </p>
          </div>
            <FontAwesomeIcon icon={faLinkedin} className='cursor-pointer text:gray-500 hover:text-[#1B1F3B]' />
          
        </div>
        <div className='space-y-3 grid xl:text-sm text-xs'>
          <h2 className='font-semibold '>Links</h2>
          {navLinks.map((navs) => (
            < Link
              to={navs.path}
              key={navs.id}
              className=' cursor-pointer hover:text-[#1B1F3B]'>{navs.tab}</Link>
          ))}
        </div>

        <div className='space-y-3 grid xl:text-sm text-xs'>
          <h2 className='font-semibold  '>Company</h2>
          {companyLinks.map((link) => (
            <Link
              to={link.path}
              key={link.id}
              className=' cursor-pointer hover:text-[#1B1F3B]'>{link.links}
            </Link>
          ))}
        </div>

        <div className='space-y-3 xl:text-sm text-xs'>
          <h2 className='font-semibold text-sm'>Connect</h2>
          <p className=' '>support@bookverse.com</p>
          <p className=''>@bookverse</p>
        </div>

      </div>
      <div className='border-t border-gray-200 mt-8 pt-4 text-center'>
        <p className='text-xs '>&copy; 2026 BookVerse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;