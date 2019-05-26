/** @jsx jsx */
import React, {FC} from 'react';
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

const clipCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee;
`;

const Clip: FC = () => (
  <div css={clipBoxCss}>
    <div css={clipCss}>Clip</div>
  </div>
);

export default Clip;
