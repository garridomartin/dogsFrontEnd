import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../redux/actions';
import { SearchBar, CardContainer } from '../components/index';
import {
  FilterByAlphabet,
  FilterByWeight,
  FilterByOrigin,
  FilterByTemperament,
} from '../containers/index';
import style from './Home.module.css';

const Home = () => {
  const allDogs = useSelector((state) => state.dogs);
  console.log(allDogs);
  //const currentPage = useSelector((state) => state.currentPage);
  //console.log(currentPage);
  //console.log(allDogs[0].temperamento);
  const [order, setOrder] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    !allDogs.length && dispatch(getDogs()); //!SOLUCION AL REGRESO DE LOS FILTROS
  }, [dispatch, allDogs]);

  //!RELOAD
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getDogs());
  };

  return (
    <div className={style.container}>
      <div>
        <SearchBar />
      </div>

      <div>
        <button className={style.nameFilter} onClick={handleClick}>
          RESET FILTERS
        </button>
        <FilterByOrigin
          setCurrentPage={setCurrentPage}
          order={order}
          setOrder={setOrder}
        />
        <FilterByTemperament
          setCurrentPage={setCurrentPage}
          order={order}
          setOrder={setOrder}
        />
      </div>
      <div>
        <div>
          <FilterByAlphabet
            setCurrentPage={setCurrentPage}
            order={order}
            setOrder={setOrder}
          />
          <FilterByWeight
            order={order}
            setOrder={setOrder}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

      <div className={style.CardsContainer}>
        <CardContainer />
      </div>
    </div>
  );
};
export default Home;
