import React from 'react';
import { Link } from 'react-router';
import GalleryShow from './GalleryShow'


const PhotoShow = (props) => {
  let url = []
  let postPhotos = props.photos.map(photo => {
    if(photo.photo_path.url !== null) {
      url.push(photo.photo_path)
    }
    return(
      <GalleryShow
      key={photo.id}
      photo_url={photo.photo_path}
      />
    )
  })

  console.log(url)

  return(
      <div className="photosshow">
        {postPhotos}
      </div>


  )
}

export default PhotoShow
