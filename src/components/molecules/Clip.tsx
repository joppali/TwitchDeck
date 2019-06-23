/** @jsx jsx */
import React, {FC, useState} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import {css, jsx} from '@emotion/core';

export interface ClipProps {
  id: string;
  src: string;
}

const clipBoxCss = css`
  border: 1px solid #d4d4d5;
  border-radius: 0.28571429rem;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 56.25% 0 0;
`;

const clipCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee;
`;

const iframeCss = css`
  width: 100%;
  height: 100%;
`;

const Clip: FC<ClipProps> = ({id, src}) => (
  <div css={clipBoxCss}>
    <Dimmer>
      <Loader>Loading</Loader>
    </Dimmer>
    <div css={clipCss}>
      <iframe src={src} css={iframeCss} id={id} />
    </div>
  </div>
);

export default Clip;
