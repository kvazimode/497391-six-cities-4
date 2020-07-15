import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mock = {
  count: 2,
  offerList: [
    {
      titlee: `eat`
    },
    {
      title: `this`
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
