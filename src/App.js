import React from 'react';
import './App.css';

import Fruit from './components/Fruit';
import Form from './components/Form';

function App() {

  return (
    <>
      <main>
      <h1>Fruitmand bezorgservice</h1>

        <Fruit
            icon="🍎"
            name="Appel"
        />

        <Fruit
            icon="🍐"
            name="Peer"
        />

        <Form/>
        </main>
    </>
  );
}

export default App;
