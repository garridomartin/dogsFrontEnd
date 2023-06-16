import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>WELCOME TO MY DOG APP</h1>
        <p>
          Here you can learn about different dog breeds, their sizes, weights,
          and temperaments. You can even create your own dog! Give it a try,
          it's fun!
        </p>
        <Link to='/home'>
          <button className={style.button}>INGRESAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
