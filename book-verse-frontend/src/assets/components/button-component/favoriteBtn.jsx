import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
import useLibrary from "../../../hooks/useLibrary";

const FavoriteButton = ({ book, toggleFavorite }) => {
  return (
    <FontAwesomeIcon
      icon={
        book.status === 'favorite'
          ? faHeartCircleCheck
          : faHeart
      }
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(book.id);
      }}
      className={`text-sm cursor-pointer m-2 transition-colors ${book.status === 'favorite'
          ? 'text-red-500'
          : 'text-gray-300 hover:text-red-300'
        }`}
    />
  );
};

export default FavoriteButton;