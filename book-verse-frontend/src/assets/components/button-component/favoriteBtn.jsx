import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useLibrary } from '../../../context/libraryContext';

const FavoriteButton = ({ book }) => {
  const { library, toggleFavorite } = useLibrary();

  const isFavorite = library.find(b => b.id === book.id)?.status === 'favorite';

  return (
    <FontAwesomeIcon
      icon={isFavorite ? faHeartCircleCheck : faHeart}
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(book.id, book);
      }}
      className={`text-sm cursor-pointer transition-colors ${
        isFavorite ? 'text-red-500' : 'text-gray-300 hover:text-red-300'
      }`}
    />
  );
};

export default FavoriteButton;