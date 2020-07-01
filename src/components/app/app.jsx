import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const handleTitleClick = () => {};

const App = (props) => {
  const {count, offerTitles} = props;
  return <Main count={count} offerTitles={offerTitles} onTitleClick={handleTitleClick}/>;
};

App.propTypes = {
  count: PropTypes.number.isRequired,
  offerTitles: PropTypes.array.isRequired
};

export default App;
