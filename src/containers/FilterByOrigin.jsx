import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCreated } from '../redux/actions';
import style from './FilterByAlphabet.module.css';

const FilterByOrigin = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    event.preventDefault();
    dispatch(filterCreated(event.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${event.target.value}`);
  };

  return (
    <div className={style.container}>
      <select
        onChange={(event) => handleChangeFilter(event)}
        className={style.nameFilter}
        defaultValue=''
      >
        <option value='ALL'>FILTER BY ORIGIN</option>
        <option value='API'>API</option>
        <option value='BDD'>DATABASE</option>
      </select>
    </div>
  );
};

export default FilterByOrigin;
