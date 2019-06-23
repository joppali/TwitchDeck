/** @jsx jsx */
import React, {FC, useState} from 'react';
import {css, jsx} from '@emotion/core';
import Slider from 'react-slick';

import Clip from '../molecules/Clip';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ClipStream: FC = () => {
  const [clipList] = useState([
    {
      id: '1',
      src: 'https://clips.twitch.tv/embed?clip=StupidAntediluvianBatteryMcaT',
    },
  ]);

  return (
    <div>
      <Slider {...settings}>
        {clipList.map(clip => (
          <Clip key={clip.id} id={clip.id} src={clip.src} />
        ))}
      </Slider>
    </div>
  );
};

export default ClipStream;
