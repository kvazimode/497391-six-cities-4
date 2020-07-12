import React from 'react';
import renderer from 'react-test-renderer';
import CardList from './card-list.jsx';

const offerList = [
  {title: `lol u`},
  {title: `no, u`}
];

const onTitleClick = jest.fn();

it(`card list renders correctly`, () => {
  const tree = renderer
    .create(<CardList offerList={offerList} onTitleClick={onTitleClick}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
