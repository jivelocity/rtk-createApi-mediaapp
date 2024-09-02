import { useRemovePhotoMutation } from '../store';
import { GoTrashcan } from 'react-icons/go';
import PropTypes from 'prop-types';

function PhotosListItem({ photo }) {

  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  }

  return (
    <div onClick={handleRemovePhoto} className='relative cursor-pointer m-2'>
      <img
        className="w-32 h-32 object-cover"
        src={photo.url}
        alt="random pic"
      />
      <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 hover:opacity-80 opacity-0 transition-all '>
        <GoTrashcan className='text-3xl text-red-500'/>
      </div>
    </div>
  );
}

PhotosListItem.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default PhotosListItem;
