import React, { FC } from 'react';
import ClipStream from '../organisms/ClipStream';
import { Header } from 'semantic-ui-react';

const TwitchDeck: FC = () => (
  <>
    <Header as="h3" block>
      TwitchDeck
    </Header>
    <ClipStream />
  </>
);

export default TwitchDeck;
