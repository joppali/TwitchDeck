/** @jsx jsx */
import React, {FC} from 'react';
import {css, jsx} from '@emotion/core';
import Slider from 'react-slick';

import Clip from '../molecules/Clip';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ClipStream: FC = () => (
  <div>
    <Slider {...settings}>
      <Clip />
      <Clip />
      <Clip />
    </Slider>
  </div>
);

export default ClipStream;
