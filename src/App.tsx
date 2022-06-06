import React from 'react';
import { Header, Main, What, Events, Sponsors, FAQ, Team, Contact, Footer } from "./components"

// Add prior winners list
const App = () => {
  return (
    <div className="outerBackground">
      <Header />
      <div className="innerBackground">
        <Main />
        <What />
        <div id="events" />
        <Events />
        <Sponsors />
        <FAQ />
        <Team />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
