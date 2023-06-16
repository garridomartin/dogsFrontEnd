import axios from 'axios';
import {
  GET_DOGS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  DOGS_DETAIL,
  SEARCH_NAME,
  CLEAR_DETAIL,
  CREATE_DOG,
  GET_TEMPERAMENTS,
  FILTER_CREATED,
  FILTER_BY_TEMPERAMENT,
  //SET_CURRENT_PAGE,
} from './indexTypes';

const URL_BASE = 'dogsbackend-production-3cd7.up.railway.app';

export const getDogs = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `dogsbackend-production-3cd7.up.railway.app/dogs`
    );
    const dogs = apiData.data;
    console.log(dogs);
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const orderByName = (value) => {
  return {
    type: ORDER_BY_NAME,
    payload: value,
  };
};
export const filterByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};

export const dogsDetail = (id) => {
  return async (dispatch) => {
    const apiData = await axios.get(`${URL_BASE}/dogs/${id}`);
    return dispatch({
      type: DOGS_DETAIL,
      payload: apiData.data,
    });
  };
};

export const searchByName = (name) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`${URL_BASE}/dogs?name=${name}`);
      return dispatch({
        type: SEARCH_NAME,
        payload: apiData.data,
      });
    } catch (error) {
      alert('Dog not found');
    }
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};

export const postDog = ({
  imagen,
  name,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  expectativaDeVida,
  temperamento,
}) => {
  return async (dispatch) => {
    console.log('Datos a enviar al servidor:', {
      imagen,
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      expectativaDeVida,
      temperamento,
    });

    await axios.post(`${URL_BASE}/dogs`, {
      imagen,
      name,
      altura: heightMin + ' - ' + heightMax,
      peso: weightMin + ' - ' + weightMax,
      expectativaDeVida: expectativaDeVida + ' years',
      temperamento,
    });

    alert('Dog Created Success');

    dispatch({
      type: CREATE_DOG,
    });
  };
};

export const getTemperament = () => {
  return async function (dispach) {
    let temp = await axios.get(`${URL_BASE}/temperaments`);
    return dispach({
      type: GET_TEMPERAMENTS,
      payload: temp.data,
    });
  };
};

export function filterTemperament(payload) {
  return {
    type: FILTER_BY_TEMPERAMENT,
    payload,
  };
}

export const filterCreated = (payload) => {
  console.log(payload);
  return {
    type: FILTER_CREATED,
    payload,
  };
};

/*export const setCurrentPage = (payload) => {
  //console.log(payload);
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};*/
