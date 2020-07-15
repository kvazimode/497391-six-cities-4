import offerList from './mocks/offers.js';

const getOfferById = (id) => {
  let place = null;
  offerList.map((offer) => {
    if (offer.id === id) {
      place = offer;
    }
  });
  return place;
};

export {getOfferById};
