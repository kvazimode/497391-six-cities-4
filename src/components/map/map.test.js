import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
jest.mock(`./map.jsx`, () => `Map`);

const offerList = [
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
];

it(`Map renders correctly`, () => {
  const tree = renderer
    .create(<Map offerList={offerList} />,
      {
        createNodeMock: () => {
          document.createElement(`div`)
        }
      })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
