import React from 'react';

const Video = props => {
  return (
    <iframe
      width="800"
      height="600"
      src={props.url}
      title={props.title}
    ></iframe>
  );
};

export default Video;
