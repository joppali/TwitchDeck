import React from 'react';

import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';

import TwitchHeader from '../../components/organisms/TwitchHeader';

const organisms = storiesOf('Organisms', module);
organisms
  .addDecorator(withKnobs)
  .addDecorator(withInfo({inline: true}))
  .add('TwitchHeader', () => <TwitchHeader />);
