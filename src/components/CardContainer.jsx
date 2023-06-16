import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../redux/actions';
import { Card, Paginado } from '../components/index';
import style from './CardContainer.module.css';

const CardContainer = () => {
  const allDogs = useSelector((state) => state.dogs);
  console.log(allDogs);
  //const currentPage = useSelector((state) => state.currentPage);
  //console.log(currentPage);
  //console.log(allDogs[0].temperamento);
  const [order, setOrder] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const dispatch = useDispatch();
  useEffect(() => {
    !allDogs.length && dispatch(getDogs()); //!SOLUCION AL REGRESO DE LOS FILTROS
  }, [dispatch, allDogs]);

  //!PAGINADO
  const getCurrentDogs = () => {
    const positionOfLastDog = currentPage * dogsPerPage;
    const positionOfFirstDog = positionOfLastDog - dogsPerPage;
    return allDogs.slice(positionOfFirstDog, positionOfLastDog);
  };
  const currentDogs = getCurrentDogs();

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  function pagePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function pageNext() {
    let lastPage = Math.ceil(allDogs.length / dogsPerPage);
    if (currentPage < lastPage) setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [allDogs]);

  return (
    <>
      <div className={style.paginadoContainer}>
        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagePrev={pagePrev}
          paginado={paginado}
          pageNext={pageNext}
          currentPage={currentPage} // solucion al resaltado de la pagina actual en el paginado
        />
      </div>

      <div className={style.container}>
        <div className={style.CardsContainer}>
          {currentDogs[0] ? (
            currentDogs.map((dog) => (
              <Card
                key={dog.id}
                id={dog.id}
                name={dog.name}
                altura={dog.altura}
                peso={dog.peso}
                expectativaDeVida={dog.expectativaDeVida}
                temperamento={dog.temperamento.join(', ')}
                imagen={dog.imagen}
              />
            ))
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
