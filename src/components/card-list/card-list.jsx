import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

const CardList = (props) => {
  const {offerList, onTitleClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerList.map((offer, i) => <Card key={i} offer={offer} onTitleClick={onTitleClick}/>)}
    </div>
  );
};

CardList.propTypes = {
  offerList: PropTypes.array,
  onTitleClick: PropTypes.func
};

export default CardList;
