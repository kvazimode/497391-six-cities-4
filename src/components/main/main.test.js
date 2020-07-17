import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
jest.mock(`../map/map.jsx`, () => `Map`);

const mock = {
  count: 3,
  offerList: [
    {
      titlee: `uno`,
      coord: [12.34, 12.30]
    },
    {
      title: `dos`,
      coord: [89.1, 76.30]
    },
    {
      title: `tres`,
      coord: [40.40, 2.20]
    }
  ]
};

const onTitleClick = jest.fn();

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main count={mock.count} offerList={mock.offerList} onTitleClick={onTitleClick}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
