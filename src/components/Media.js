import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMedia = (changeDate) => {
  const [media, setImage] = useState();
  const [title, setTitle] = useState();
  const [mediaType, setMediaType] = useState();

  useEffect(() => {
    const fetchMedia = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${changeDate}`
        )
        .then(res => {
          const spaceImage = res.data.url;
          const spaceTitle = res.data.title;
          const spaceMediaType = res.data.media_type;
          console.log(res);

          setImage(spaceImage);
          setTitle(spaceTitle);
          setMediaType(spaceMediaType);
        });
    };

    fetchMedia();
  }, [changeDate]);

  return { media, title, mediaType };
};

const Media = (props) => {
  const retrieved = useFetchMedia(props.date);
  return (
    <div>
      <h2>{retrieved.title}</h2>
      {retrieved.mediaType === 'image' ? (
        <img src={retrieved.media} alt={retrieved.title} />
      ) : (
        <iframe width='800' height='600' src={retrieved.media} title={retrieved.title}></iframe>
      )}
    </div>
  );
};

export default Media;
