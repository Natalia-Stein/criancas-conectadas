import React from 'react';
import MagazineViewer from './components/MagazineViewer';
import pdf from './assets/secure_internet.pdf';

import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <div className="title-container">Crianças conectadas</div>
      <MagazineViewer pdf={pdf} />
    </div>
  );
};

export default App;
