import React from 'react';


const ImageList = props => {
  console.log(props.images);

  return (
    <div> Image List
      {props.images.map((img, key) => <p key={img.id}>{img.color} with ID {key = img.id}</p>)}
    </div>
  )
}

export default ImageList;
