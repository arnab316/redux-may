import {useFetchAlbumsQuery,useAddAlbumMutation } from '../store/index'
import Skeleton from './Skeleton'
import Button from './Button'
import AlbumListitems from './AlbumListitems'
const AlbumList = ({user}) => {
 const {data, error, isFetching } =useFetchAlbumsQuery(user);
 const [addAlbum, results] = useAddAlbumMutation();
       console.log(addAlbum, results , 'test');
       const handleAddAlbum = () => {
        addAlbum(user);
      };
    
  let content;
  if (isFetching) {
    content = <Skeleton className='h-10 w-full' times={3}/>
  }
  else if(error){
    content = <div>error loading Albums..</div>
  }else{
    content = data.map((album)=>{
      return <AlbumListitems key={album.id} album={album}/>
    })
  }
  return (
    <div>
    <div className='m-2 flex flex-row items-center justify-between'> 
     <h3 className='text-lg font-bold'> Albums For {user.name} </h3>
    <Button loading={results.isLoading} onClick={handleAddAlbum}>
      +Add Album</Button>
    </div>
    <div>{content}</div>
    </div>
  )
}

export default AlbumList
