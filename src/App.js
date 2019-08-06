import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './main_components/Header';
import NoteList from './note_components/NoteList';
import DummyStore from './dummy-store';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/folder' component={FolderItem} />
      </Switch>
      
    </div>
  );
}

export default App;
