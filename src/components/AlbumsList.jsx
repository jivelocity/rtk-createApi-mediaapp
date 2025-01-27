import PropTypes from 'prop-types';
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumListItem from './AlbumListItem';

AlbumsList.propTypes = {
  user: PropTypes.object.isRequired,
};

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
    //providesTags((result,error, user)=>{
    //   return [{ type: 'Album', id: user.id }]
    // })  only refetching data for the user
  }

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3}/>;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
        <Button
          onClick={handleAddAlbum}
          loading={results.isLoading}
        >
          + Add Album
        </Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}


export default AlbumsList;
