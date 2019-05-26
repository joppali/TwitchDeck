/** @jsx jsx */
import React, {FC} from 'react';
import Clip from '../molecules/Clip';
import {css, jsx} from '@emotion/core';

const clipBoxCss = css`
  border: 1px solid #d4d4d5;
  border-radius: 0.28571429rem;
  width: 60%;
  height: auto;
  left: 20%;
  right: 20%;
  position: absolute;
  padding: 33.75% 0 0;
`;

const prevClipBoxCss = css`
  border: 1px solid #d4d4d5;
  border-radius: 0.28571429rem;
  width: 60%;
  height: auto;
  top: 10%;
  left: 15%;
  right: 25%;
  position: absolute;
  padding: 27% 0 0;
`;

const nextClipBoxCss = css`
  border: 1px solid #d4d4d5;
  border-radius: 0.28571429rem;
  width: 60%;
  height: auto;
  top: 10%;
  left: 25%;
  right: 15%;
  position: absolute;
  padding: 27% 0 0;
`;

const ClipStream: FC = () => (
  <div>
    <div css={prevClipBoxCss}>
      <Clip />
    </div>
    <div css={nextClipBoxCss}>
      <Clip />
    </div>
    <div css={clipBoxCss}>
      <Clip />
    </div>
  </div>
);

export default ClipStream;
