import React from 'react';
import { Link } from 'react-router';
import GalleryShow from './GalleryShow'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images';


const PhotoShow = (props) => {
  let imagePaths = []
  props.photos.forEach(photo => {
    if(photo.photo_path.url !== null) {
      imagePaths.push(photo.photo_path)
    }
  })
  let galleryObjects = imagePaths.map((image) => {
    return ({
        original: image.url
      })
  })


  return(
      <div className="photosshow">
      </div>
  )
}

export default PhotoShow
// <ImageGallery photos={galleryObjects} />
