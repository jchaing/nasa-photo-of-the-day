import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import Video from './Video';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const useFetchMedia = changeDate => {
  const [media, setImage] = useState();
  const [title, setTitle] = useState();
  const [mediaType, setMediaType] = useState();
  const [explanation, setExplanation] = useState();
  const [copyright, setCopyright] = useState();

  useEffect(() => {
    const fetchMedia = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=XK058RAji6GAtwfKpv9hLFPmfnROVb1DzvNEXoDn&date=${changeDate}`
        )
        .then(res => {
          const spaceImage = res.data.url;
          const spaceTitle = res.data.title;
          const spaceMediaType = res.data.media_type;
          const spaceExplanation = res.data.explanation;
          const spaceCopyright = res.data.copyright;
          console.log(res);

          setImage(spaceImage);
          setTitle(spaceTitle);
          setMediaType(spaceMediaType);
          setExplanation(spaceExplanation);
          setCopyright(spaceCopyright);
        });
    };

    fetchMedia();
  }, [changeDate]);

  return { media, title, mediaType, explanation, copyright };
};

const Media = ({ date }) => {
  const retrieved = useFetchMedia(date);
  return (
    <div>
      <Card>
        {retrieved.mediaType === 'image' ? (
          <Image url={retrieved.media} alt={retrieved.title} />
        ) : (
          <Video url={retrieved.media} title={retrieved.title} />
        )}
        <CardBody>
          <CardTitle>{retrieved.title}</CardTitle>
          <CardText>{retrieved.explanation}</CardText>
          <footer>Copyright: {retrieved.copyright}</footer>
        </CardBody>
      </Card>
    </div>
  );
};

export default Media;
