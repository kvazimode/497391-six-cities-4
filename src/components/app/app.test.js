import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mock = {
  count: 2,
  offerTitles: [`eat`, `this`]
};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<App count={mock.count} offerTitles={mock.offerTitles}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
