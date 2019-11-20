import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

const character = {
  _id: '5cf5679a915ecad153ab68c8',
  allies: [
    'Royal Earthbender Guards'
  ],
  enemies: [
    'Chin'
  ],
  photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
  name: '46th Earth King',
  affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
};

describe('Character component', () => {
  it('should render a Character', () => {
    const wrapper = shallow(<Character { ...character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
