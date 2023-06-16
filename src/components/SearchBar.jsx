import React from 'react';
import style from './SearchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../redux/actions';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault(event);
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);
    dispatch(searchByName(name));
    setName('');
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={style.container}>
      <div className={style.SearchBar}>
        <input
          className={style.input}
          value={name}
          type='text'
          placeholder={isFocused ? '' : 'Find your dog'}
          onChange={(event) => handleInputChange(event)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button
          className={style.nameFilter}
          type='submit'
          onClick={(event) => handleSubmit(event)}
        >
          SEARCH DOG
        </button>
        <Link to='/create'>
          <button className={style.nameFilter}>CREATE DOG</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
