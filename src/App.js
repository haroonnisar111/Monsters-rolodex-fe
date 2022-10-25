import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);
  const onSearchChange = e => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchStr(searchField);
  };
  const filteredMon = monsters.filter(monster => {
    return monster.name.toLocaleLowerCase().includes(searchStr);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
        className='search-Monst'
      />

      <CardList Cards={filteredMon} />
    </div>
  );
};

export default App;
