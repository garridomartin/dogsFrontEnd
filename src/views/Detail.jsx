import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { dogsDetail, clearDetail } from '../redux/actions';
import style from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.detail);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(dogsDetail(id));
  }, [dispatch, id]);

  const handleClearDetail = () => {
    dispatch(clearDetail());
  };

  // Verificar si dogDetail es un objeto y convertirlo en un array si es necesario
  const dogDetailArray = Array.isArray(dogDetail) ? dogDetail : [dogDetail];

  if (!dogDetailArray.length) {
    return <div>Loading...</div>; // O mostrar un indicador de carga mientras se espera la respuesta
  }
  console.log(dogDetail);
  console.log(dogDetailArray);
  return (
    <div className={style.cuerpoTarjeta}>
      {dogDetailArray.map((dog) => (
        <div key={dog.id} className={style.card}>
          {dog.imagen && (
            <img src={dog.imagen} alt={dog.name} className={style.image} />
          )}
          <div>
            <h3 className={style.title}>{dog.name}</h3>
            <p className={style.text}>
              <strong>Altura: </strong>
              {dog.altura} cm.
            </p>
            <p className={style.text}>
              <strong>Peso: </strong>
              {dog.peso} kg.
            </p>
            <p className={style.text}>
              <strong>Expectativa de vida: </strong>
              {dog.expectativaDeVida}
            </p>
            {dog.temperamento && (
              <p className={style.text}>
                <strong>Temperamento: </strong>
                {dog.temperamento.join(', ')}
              </p>
            )}
          </div>
        </div>
      ))}
      <Link to='/home'>
        <button className={style.link} onClick={handleClearDetail}>
          Press HERE to go back
        </button>
      </Link>
    </div>
  );
};

export default Detail;
