import React, { useEffect } from 'react';
import { currencyCodes } from '../../utils/currency-codes-array';
import { connect } from 'react-redux';
import { setCurrency } from '../../redux/crypto/crypto.actions';

import { Select } from './currency-selector.styles';

const CurrencySelector = ({ setCurrency, cur }) => {
  const onChange = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, [cur]);

  return (
    <Select onChange={(e) => onChange(e)} value={cur}>
      {currencyCodes.map((i) => (
        <option key={Math.random()} value={i}>
          {i}
        </option>
      ))}
    </Select>
  );
};

const mapStateToProps = (state) => ({
  cur: state.crypto.cur,
});

export default connect(mapStateToProps, { setCurrency })(CurrencySelector);
