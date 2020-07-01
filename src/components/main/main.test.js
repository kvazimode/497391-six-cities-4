import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const mock = {
  count: 3,
  offerTitles: [`uno`, `dos`, `tres`]
};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main count={mock.count} offerTitles={mock.offerTitles}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
