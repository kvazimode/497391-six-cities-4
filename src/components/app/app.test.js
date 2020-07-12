import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mock = {
  count: 2,
  offerList: [`eat`, `this`]
};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<App count={mock.count} offerList={mock.offerList}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
