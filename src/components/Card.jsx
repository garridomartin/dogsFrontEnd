import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ name, peso, temperamento, imagen, id }) => {
  console.log(temperamento);

  if (!Array.isArray(temperamento)) {
    temperamento = [temperamento];
  }
  temperamento = temperamento.map((temper) => {
    if (typeof temper === 'string') return temper;
    return temper?.name;
  });

  return (
    <div className={style.Card}>
      <p className={style.Title}>{name}</p>
      <p>
        <strong>Peso:</strong> {peso}
      </p>
      <p>
        <strong>Temperamento:</strong>

        {temperamento.map((temp) => (
          <a className={style.temper}> {temp} </a>
        ))}
      </p>
      <Link to={`/dogs/${id}`}>
        <img src={imagen} alt='Imagen' className={style.Image} />
      </Link>
    </div>
  );
};

export default Card;
