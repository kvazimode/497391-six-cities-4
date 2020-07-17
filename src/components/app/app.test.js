import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
jest.mock(`../map/map.jsx`, () => `Map`);

const mock = {
  count: 2,
  offerList: [
    {
      titlee: `eat`,
      coord: [12.30, 21.32]
    },
    {
      title: `this`,
      coord: [88.88, 43.34]
    }
  ]
};

const onTitleClick = () => {};

it(`Main by app renders correctly`, () => {
  const tree = renderer
    .create(<App count={mock.count} offerList={mock.offerList} onTitleClick={onTitleClick}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
