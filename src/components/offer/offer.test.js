import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';

const mockId = 1;

it(`Offer description renders with title 'Beautiful & luxurious...'`, () => {
  const tree = renderer
    .create(<Offer offerId={mockId}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
