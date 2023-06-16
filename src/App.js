import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Detail, CreateDog, Home, Landing } from './views/index';

/* 
import SearchBar from './components/SearchBar';
<Route exact path="/detail" render={() => <Detail />} />
<Route exact path="/create" render={() => <Forms />} />
{location.pathname !== '/' && <SearchBar />}
 
 */

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dogs/:id' element={<Detail />} />
        <Route path='/create' element={<CreateDog />} />
      </Routes>
    </div>
  );
};

export default App;
