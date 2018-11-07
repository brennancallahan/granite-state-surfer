import React from 'react';
import { Link } from 'react-router';
import GalleryShow from './GalleryShow'
import Gallery from 'react-photo-gallery'


const PhotoShow = (props) => {
  let imagePaths = []
  props.photos.forEach(photo => {
    if(photo.photo_path.url !== null) {
      imagePaths.push(photo.photo_path)
    }
  })
  let galleryObjects = imagePaths.map((image) => {
    return ({
        src: image.url, width: 3, height: 3
      })
  })


  return(
      <div className="photosshow">

      </div>
  )
}

export default PhotoShow
        // <Gallery photos={galleryObjects} /> line 23
