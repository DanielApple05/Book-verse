import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-[#FAF7F2] border-t border-gray-200 px-16 py-10'>
      <div className='flex justify-between'>

       
        <div className='space-y-3 max-w-xs'>
          <h1 className='text-xl font-bold'>📖 BookVerse</h1>
          <p className='text-sm text-gray-500'>Read more. Discover more. Grow more.</p>
          <div className='flex gap-4 text-gray-500'>
            <FontAwesomeIcon icon={faTwitter} className='cursor-pointer hover:text-[#1B1F3B]' />
            <FontAwesomeIcon icon={faInstagram} className='cursor-pointer hover:text-[#1B1F3B]' />
            <FontAwesomeIcon icon={faFacebook} className='cursor-pointer hover:text-[#1B1F3B]' />
          </div>
        </div>

     
        <div className='space-y-3'>
          <h2 className='font-semibold text-sm'>Links</h2>
          {['Home', 'Features', 'Categories', 'Pricing'].map((link) => (
            <p key={link} className='text-sm text-gray-500 cursor-pointer hover:text-[#1B1F3B]'>{link}</p>
          ))}
        </div>

     
        <div className='space-y-3'>
          <h2 className='font-semibold text-sm'>Company</h2>
          {['About Us', 'Blog', 'Careers', 'Contact'].map((link) => (
            <p key={link} className='text-sm text-gray-500 cursor-pointer hover:text-[#1B1F3B]'>{link}</p>
          ))}
        </div>

        <div className='space-y-3'>
          <h2 className='font-semibold text-sm'>Connect</h2>
          <p className='text-sm text-gray-500'>support@bookverse.com</p>
          <p className='text-sm text-gray-500'>@bookverse</p>
        </div>

      </div>

      {/* Bottom */}
      <div className='border-t border-gray-200 mt-8 pt-4 text-center'>
        <p className='text-xs text-gray-400'>© 2024 BookVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;