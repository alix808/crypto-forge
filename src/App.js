import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCryptoPrices } from './redux/crypto/crypto.actions';
import CryptoPrices from './comps/crypto-prices/crypto-prices';
import MoreInfo from './comps/more-info/more-info';
import './App.css';

function App({ getCryptoPrices, cur }) {
  useEffect(() => {
    // fetch crypto prices on render
    getCryptoPrices(cur);
    // eslint-disable-next-line
  }, [cur]);

  useEffect(() => {
    // update every minute
    setInterval(() => {
      getCryptoPrices(cur);
    }, 60000);

    // eslint-disable-next-line
  }, [cur]);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={CryptoPrices} />
        <Route
          exact
          path='/coin/:id'
          render={(props) => <MoreInfo {...props} />}
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  cur: state.crypto.cur,
});

export default connect(mapStateToProps, { getCryptoPrices })(App);
