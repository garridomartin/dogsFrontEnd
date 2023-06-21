import React from 'react';
import style from './Paginado.module.css';

export default function Paginado({
  dogsPerPage,
  allDogs,
  paginado,
  currentPage,
  pagePrev,
  pageNext,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }
  console.log(pageNumber);
  return (
    <nav>
      <div className={style.paginationCenter}>
        <div className={style.numberFlechita} onClick={pagePrev}>
          «
        </div>
        <div>
          {' '}
          {[...Array(Math.ceil(allDogs / dogsPerPage))].map((_, index) => {
            const pageNumber = index + 1;
            return (
              currentPage === pageNumber && (
                <div
                  className={`${style.numberFlechita} ${style.currentPageSquare}`}
                  key={pageNumber}
                  onClick={() => paginado(pageNumber)}
                >
                  {pageNumber}
                </div>
              )
            );
          })}{' '}
        </div>
        {pageNumber.map((number) => (
          <div
            className={`${style.number} ${
              currentPage === number ? style.currentPage : '' //solucion para darle estilo a la pagina actual
            }`}
            key={number}
            onClick={() => paginado(number)}
          >
            {number}
          </div>
        ))}
        <div className={style.numberFlechita} onClick={pageNext}>
          »
        </div>
      </div>
    </nav>
  );
}
