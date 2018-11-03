import React from 'react';
import { Link } from 'react-router';

const GalleryShow= (props) => {
  return(
  <div>
    <img src={props.photo_url.url} />
  </div>

  )
}

export default GalleryShow
