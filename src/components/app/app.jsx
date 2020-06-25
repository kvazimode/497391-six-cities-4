import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {count, offerTitles} = props;
  return <Main count={count} offerTitles={offerTitles}/>;
};

export default App;
