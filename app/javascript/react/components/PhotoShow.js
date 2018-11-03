import React from 'react';
import { Link } from 'react-router';
import GalleryShow from './GalleryShow'

const PhotoShow = (props) => {
  let postPhotos = props.photos.map(photo => {
    return(
      <GalleryShow
      key={photo.id}
      photo_url={photo.photo_path}
      />
    )
  })


  return(
      <div className="photosshow">
        {postPhotos}
      </div>


  )
}

export default PhotoShow
