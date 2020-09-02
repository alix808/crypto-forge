import React, { Fragment, useEffect } from 'react';
import CurrencySelector from '../currency-selector/currency-selector';
import { connect } from 'react-redux';

import { checkMatch } from '../../redux/crypto/crypto.actions';

import Spinner from '../spinner/spinner';

import {
  Center,
  Row,
  Image,
  Red,
  Green,
  StyledLink,
  Item,
  Icon,
} from './crypto-prices.styles';

const blue = '#0099ff';

const Header = () => (
  <Row>
    <Item />
    <Item inputColor={blue}>Name</Item>
    <Item>Price</Item>
    <Item>Market Cap</Item>
    <Item>24 Hr Change</Item>
  </Row>
);

const CryptoPrices = ({ prices, cur, loading, checkMatch }) => {
  useEffect(() => {
    if (prices) {
      checkMatch(cur, prices);
    }

    // eslint-disable-next-line
  }, [cur, prices]);

  // function to calculate color of each coin’s 24h change
  const changeHelper = (percent) => {
    let value = Math.sign(percent);
    let boolean = null;

    if (value === 1) {
      boolean = true;
    }

    if (value === -1) {
      boolean = false;
    }

    return boolean;
  };

  const Comp = () => (
    <Fragment>
      <Header />
      {prices.map((i) => (
        <Row key={i.CoinInfo.Id}>
          <Item>
            <Image
              imageUrl={`https://www.cryptocompare.com/${
                i.DISPLAY[cur.toString()].IMAGEURL
              }`}
            />
          </Item>
          <StyledLink to={`/coin/${i.CoinInfo.Id}`}>
            {i.CoinInfo.Name}
          </StyledLink>
          <Item>{i.DISPLAY[cur.toString()].PRICE}</Item>
          <Item>{i.DISPLAY[cur.toString()].MKTCAP}</Item>
          {changeHelper(i.DISPLAY[cur.toString()].CHANGEPCTDAY) ? (
            <Green>
              {i.DISPLAY[cur.toString()].CHANGEPCTDAY}
              <Icon className='fas fa-arrow-up' />
            </Green>
          ) : (
            <Red>
              {i.DISPLAY[cur.toString()].CHANGEPCTDAY}
              <Icon className='fas fa-arrow-down' />
            </Red>
          )}
        </Row>
      ))}
    </Fragment>
  );

  return (
    <Center>
      <CurrencySelector />
      {loading ? <Spinner /> : <Comp />}
    </Center>
  );
};

const mapStateToProps = (state) => ({
  prices: state.crypto.prices,
  cur: state.crypto.cur,
  loading: state.crypto.loading,
  match: state.crypto.match,
});

export default connect(mapStateToProps, { checkMatch })(CryptoPrices);
