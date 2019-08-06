import React, {Component} from 'react';
import Header from './main_components/Header';
import NoteList from './note_components/NoteList';
import DummyStore from './dummy-store';
import FolderList from './folder_components/FolderList';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div id="navigation">
        <FolderList folders={DummyStore.folders} />
        <NoteList notes={DummyStore.notes} folder={DummyStore.folders[0]} />
        </div></div>
    );
  }
}

export default App;
