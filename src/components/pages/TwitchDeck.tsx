/** @jsx jsx */
import {FC} from 'react';
import {jsx} from '@emotion/core';
import ClipStream from '../organisms/ClipStream';
import TwitchHeader from '../organisms/TwitchHeader';

const TwitchDeck: FC = () => (
  <div>
    <TwitchHeader />
    <ClipStream />
  </div>
);

export default TwitchDeck;
