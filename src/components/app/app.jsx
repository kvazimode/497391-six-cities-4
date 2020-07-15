import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Offer from '../offer/offer.jsx';
import Main from '../main/main.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentId: null
    };
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(id) {
    this.setState({currentId: id});
  }
  _renderApp() {
    const {count, offerList} = this.props;
    if (this.state.currentId) {
      return <Offer offerId={this.state.currentId}/>;
    } else {
      return <Main count={count} offerList={offerList} onTitleClick={this._handleTitleClick}/>;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/desc">
            <Offer offerId={1}/>
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
