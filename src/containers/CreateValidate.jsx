import React from 'react';
import style from '../views/CreateDog.module.css';

const validate = (input) => {
  const error = {};

  if (!input.name) {
    error.name = <span className={style.text}>Race is required!</span>;
  } else if (!/^[a-zA-Z\s]+$/.test(input.name)) {
    error.name = <span className={style.text}>Race only accepts letters</span>;
  }

  const errorNum = [
    'heightMin',
    'heightMax',
    'weightMin',
    'weightMax',
    'expectativaDeVida',
  ];

  errorNum.forEach((value) => {
    if (input[value] === '' || isNaN(parseFloat(input[value]))) {
      error[value] = `🔺${value} is required`;
    }
  });

  if (
    parseFloat(input['heightMin']) > parseFloat(input['heightMax']) ||
    parseFloat(input['weightMin']) > parseFloat(input['weightMax'])
  ) {
    if (parseFloat(input['heightMin']) > parseFloat(input['heightMax'])) {
      error['heightMin'] = '🔺heightMin must be less than heightMax';
      error['heightMax'] = '🔺heightMax must be greater than heightMin';
    }

    if (parseFloat(input['weightMin']) >= parseFloat(input['weightMax'])) {
      error['weightMin'] = '🔺weightMin must be less than weightMax';
      error['weightMax'] = '🔺weightMax must be greater than weightMin';
    }
  }

  return error;
};

export default validate;
