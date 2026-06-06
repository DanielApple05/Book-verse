import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import useLibrary from '../../../hooks/useLibrary';

const FavoriteButton = ({ book }) => {
  const { library, toggleFavorite } = useLibrary();

  const isFavorite = library.find(b => b.id === book.id)?.status === 'favorite';

  return (
    <FontAwesomeIcon
      icon={isFavorite ? faHeartCircleCheck : faHeart} // ✅ use isFavorite
      onClick={() => toggleFavorite(book.id)}
      className={`text-sm cursor-pointer ${isFavorite ? 'text-red-500' : 'text-gray-300'}`} // ✅
    />
  );
};

export default FavoriteButton;