import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

const characters = [{
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
}];

describe('Characters component', () => {
  it('should render a list of Characters', () => {
    const wrapper = shallow(<Characters items={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
