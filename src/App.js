import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './main_components/Header';
import FolderItem from './folder_components/FolderItem';

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
