import React from 'react';

const Video = ({url, title}) => {
  return (
    <iframe
      width="800"
      height="600"
      src={url}
      title={title}
    ></iframe>
  );
};

export default Video;
