import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from '../redux/actions';
import style from './FilterByAlphabet.module.css';

const FilterByAlphabet = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${event.target.value}`);
  };

  return (
    <div>
      <select
        onChange={(event) => {
          handleFilter(event);
        }}
        name='filterAZ'
        id='filterAZ'
        className={style.nameFilter}
      >
        <option className={style.Az} value='AZ'>
          Order A-Z
        </option>
        <option className={style.Az} value='ZA'>
          Order Z-A
        </option>
      </select>
    </div>
  );
};

export default FilterByAlphabet;
