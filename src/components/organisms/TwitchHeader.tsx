/** @jsx jsx */
import {FC} from 'react';
import {Header} from 'semantic-ui-react';
import {css, jsx} from '@emotion/core';

const headerCss = css`
  background-color: #6441a4 !important;
  border: 0px !important;
  border-radius: 0px !important;
  color: white !important;
`;

const TwitchHeader: FC = () => (
  <Header as="h3" block css={headerCss}>
    TwitchDeck
  </Header>
);

export default TwitchHeader;
