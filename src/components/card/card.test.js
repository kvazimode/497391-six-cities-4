import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

const mock = {
  title: `lol u`,
};

const onTitleClick = jest.fn();

it(`card renders correctly`, () => {
  const tree = renderer
    .create(<Card title={mock.title} onTitleClick={onTitleClick}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
