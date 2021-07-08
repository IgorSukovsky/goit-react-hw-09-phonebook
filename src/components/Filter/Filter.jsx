import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chengeFilter } from '../../redux/contact/contact-action';
import style from './Filter.module.css';

import { getFilter } from '../../redux/contact/contact-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onHandleChenge = event =>
    dispatch(chengeFilter(event.currentTarget.value));

  return (
    <div>
      <h3 className={style.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChenge}
        className={style.input}
      />
    </div>
  );
};

export default Filter;
