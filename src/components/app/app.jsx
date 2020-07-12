import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Offer from '../offer/offer.jsx';
import Main from '../main/main.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleTitleClick() {}
  _renderApp() {
    const {count, offerList} = this.props;
    return <Main count={count} offerList={offerList} onTitleClick={this._handleTitleClick}/>;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route excat path="/desc">
            <Offer />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  count: PropTypes.number.isRequired,
  offerList: PropTypes.array.isRequired
};

export default App;
