import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const handleTitleClick = () => {};

const App = (props) => {
  const {count, offerList} = props;
  return <Main count={count} offerList={offerList} onTitleClick={handleTitleClick}/>;
};

App.propTypes = {
  count: PropTypes.number.isRequired,
  offerList: PropTypes.array.isRequired
};

export default App;
