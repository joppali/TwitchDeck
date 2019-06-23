import React from 'react';

import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';

import TwitchDeck from '../../components/pages/TwitchDeck';

const pages = storiesOf('Pages', module);
pages
  .addDecorator(withKnobs)
  .addDecorator(withInfo({inline: true}))
  .add('TwitchDeck', () => <TwitchDeck />);
