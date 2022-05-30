import React from 'react';
import { Header, Main, What, Events } from "./components"

// Add prior winners list
const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Main />
        <What />
        <Events />
      </div>
    </div>
  );
}

export default App;
