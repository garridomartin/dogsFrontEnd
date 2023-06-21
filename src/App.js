import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Detail, CreateDog, Home, Landing, LogIn } from './views/index';
//import axios from 'axios';

//axios.default.baseUrl = 'http://localhost:3001';//para usar solo desde mi pc
//axios.default.baseUrl = 'dogsbackend-production-3cd7.up.railway.app';
/* 
import SearchBar from './components/SearchBar';
<Route exact path="/detail" render={() => <Detail />} />
<Route exact path="/create" render={() => <Forms />} />
{location.pathname !== '/' && <SearchBar />}
<Route exact path='/' element={<LogIn />} />
 
 */

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dogs/:id' element={<Detail />} />
        <Route path='/create' element={<CreateDog />} />
      </Routes>
    </div>
  );
};

export default App;
