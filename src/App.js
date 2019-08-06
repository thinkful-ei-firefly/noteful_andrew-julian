import React from 'react';
import Header from './main_components/Header';
import NoteList from './note_components/NoteList';
import DummyStore from './dummy-store';
import FolderItem from './folder_components/FolderItem';

function App() {
  return (
    <div className="App">
      <Header />
      <NoteList notes={DummyStore.notes} folder={DummyStore.folders[0].id}/>
      <FolderItem =
    </div>
  );
}

export default App;
