/** @jsx jsx */
import React, {FC} from 'react';
import {css, jsx} from '@emotion/core';

import Clip from '../molecules/Clip';

const clipBoxCss = css`
  border: 1px solid #d4d4d5;
  border-radius: 0.28571429rem;
  width: 100%;
  height: auto;
  position: absolute;
  padding: 56.25% 0 0;
`;

const ClipStream: FC = () => (
  <div>
    <div css={clipBoxCss}>
      <Clip />
    </div>
  </div>
);

export default ClipStream;
