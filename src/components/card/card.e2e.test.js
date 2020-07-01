import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  title: `lol u`,
};

const onTitleClick = jest.fn();

it(`Handles title click`, () => {
  const card = shallow(
      <Card title={mock.title} onTitleClick={onTitleClick} />
  );

  const offerTitle = card.find(`.place-card__name`);
  offerTitle.simulate(`click`);
  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
