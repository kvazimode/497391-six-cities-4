import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const mock = {
  count: 3,
  offerList: [`uno`, `dos`, `tres`]
};

const onTitleClick = jest.fn();

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main count={mock.count} offerList={mock.offerList} onTitleClick={onTitleClick}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
