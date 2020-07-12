import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offerList from './mocks/offers.js';

const init = () => {
  const setup = {
    count: 777,
    offerList
  };

  ReactDOM.render(
      <App count={setup.count} offerList={setup.offerList}/>,
      document.querySelector(`#root`)
  );
};

init();
