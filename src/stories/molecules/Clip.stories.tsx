import React from 'react';

import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, text} from '@storybook/addon-knobs';

import Clip from '../../components/molecules/Clip';

const molecules = storiesOf('Molucules', module);
molecules
  .addDecorator(withKnobs)
  .addDecorator(withInfo({inline: true}))
  .add('Clip', () => (
    <Clip
      id={text('テキスト', 'ID_1')}
      src={text(
        'URL',
        'https://clips.twitch.tv/embed?clip=StupidAntediluvianBatteryMcaT'
      )}
    />
  ));
