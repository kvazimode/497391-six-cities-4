import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const setup = {
    count: 666,
    offerTitles: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`]
  };
  ReactDOM.render(
      <App count={setup.count} offerTitles={setup.offerTitles}/>,
      document.querySelector(`#root`)
  );
};

init();
