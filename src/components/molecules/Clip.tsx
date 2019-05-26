/** @jsx jsx */
import React, {FC} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import {css, jsx} from '@emotion/core';

const clipCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee;
`;

const Clip: FC = () => (
  <div>
    <Dimmer>
      <Loader>Loading</Loader>
    </Dimmer>
    <div css={clipCss}>clip</div>
  </div>
);

export default Clip;
