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
  SET_CURRENT_PAGE,
} from './indexTypes';

const initialState = {
  dogs: [],
  detail: [],
  backupDogs: [],
  temperamentsArr: [],
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, backupDogs: action.payload };
    case ORDER_BY_NAME:
      let sortedArr = [...state.dogs];
      sortedArr.sort((a, b) => {
        if (action.payload === 'AZ') {
          return a.name.localeCompare(b.name);
        } else if (action.payload === 'ZA') {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
      return {
        ...state,
        dogs: sortedArr,
      };
    case ORDER_BY_WEIGHT:
      let sortedArr3 = state.dogs.sort(function (a, b) {
        const weightA = Number(a.peso.split('-')[0]);
        const weightB = Number(b.peso.split('-')[0]);

        if (action.payload === 'HIGH') {
          return weightB - weightA;
        } else if (action.payload === 'LESS') {
          return weightA - weightB;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        dogs: sortedArr3,
      };
    case DOGS_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    /* case SEARCH_NAME_SUCCESS:
      return {
        ...state,
        dogs: action.payload,
        error: null, // Limpiar el campo de error
      };
    case SEARCH_NAME_ERROR:
      return {
        ...state,
        dogs: [],
        error: action.payload, // Establecer el mensaje de error en el estado
      };*/
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case CREATE_DOG:
      return {
        ...state,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperamentsArr: action.payload,
      };
    case FILTER_BY_TEMPERAMENT:
      let allDogs = state.dogs;
      let temperamentFilter =
        action.payload === 'ALL'
          ? allDogs
          : allDogs.filter((dog) => dog.temperamento?.includes(action.payload));
      if (temperamentFilter.length === 0) {
        temperamentFilter = [];
      }
      return {
        ...state,
        dogs: temperamentFilter,
      };
    case FILTER_CREATED:
      const prueba = state.backupDogs;
      let createFilter;
      if (action.payload === 'ALL') {
        createFilter = prueba;
      } else {
        createFilter =
          action.payload === 'BDD'
            ? prueba.filter((e) => e.created)
            : prueba.filter((e) => !e.created);
      }
      return {
        ...state,
        dogs: createFilter,
      };

    case SET_CURRENT_PAGE:
      // console.log(action.payload);
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return initialState;
  }
};

export default rootReducer;
