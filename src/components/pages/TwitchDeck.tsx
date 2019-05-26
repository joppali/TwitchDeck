/** @jsx jsx */
import React, {FC} from 'react';
import ClipStream from '../organisms/ClipStream';
import {Header} from 'semantic-ui-react';
import {css, jsx} from '@emotion/core';

const headerCss = css`
  background-color: #6441a4 !important;
  border: 0px !important;
  border-radius: 0px !important;
  color: white !important;
`;

const TwitchDeck: FC = () => (
  <div>
    <Header as="h3" block css={headerCss}>
      TwitchDeck
    </Header>
    <ClipStream />
  </div>
);

export default TwitchDeck;
