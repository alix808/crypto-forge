import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getMoreInfo,
  destructor,
  convert,
} from '../../redux/more-info/more-info.actions';

import {
  Center,
  Container,
  Text,
  Title,
  Icon,
} from '../more-info/more-info.styles';

const MoreInfo = ({
  match: {
    params: { id },
  },
  history,
  prices,
  getMoreInfo,
  element,
  destructor,
  newEl,
  convert,
  array,
}) => {
  useEffect(() => {
    if (prices) {
      getMoreInfo(prices, id);
    }

    // eslint-disable-next-line
  }, [prices]);

  useEffect(() => {
    if (element) {
      destructor(element);
    }

    // eslint-disable-next-line
  }, [element]);

  useEffect(() => {
    if (newEl) {
      convert(newEl);
    }

    // eslint-disable-next-line
  }, [newEl]);

  return (
    <Center>
      <Container>
        <Icon className='fas fa-arrow-left' onClick={() => history.goBack()} />
        <Title>{element && element.CoinInfo.FullName}</Title>
        {array && array.map((i) => <Text key={Math.random()}>{i}</Text>)}
      </Container>
    </Center>
  );
};

const mapStateToProps = (state) => ({
  element: state.moreInfo.element,
  prices: state.crypto.prices,
  newEl: state.moreInfo.newEl,
  array: state.moreInfo.array,
});

export default connect(mapStateToProps, {
  getMoreInfo,
  destructor,
  convert,
})(MoreInfo);
