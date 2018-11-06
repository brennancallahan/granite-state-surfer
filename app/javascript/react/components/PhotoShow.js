import React from 'react';
import { Link } from 'react-router';
import GalleryShow from './GalleryShow'
import Gallery from 'react-photo-gallery'


const PhotoShow = (props) => {
  let imagePaths = []
  let postPhotos = props.photos.map(photo => {
    if(photo.photo_path.url !== null) {
      imagePaths.push(photo.photo_path)
    }

    console.log(imagePaths)

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
