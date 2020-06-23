import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const setup = {count: 666};
  ReactDOM.render(
      <App count={setup.count}/>,
      document.querySelector(`#root`)
  );
};

init();
