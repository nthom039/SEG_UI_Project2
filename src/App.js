import Navbar from './Navbar';
import PremadeWork from './PremadeWork';
import Home from './Home';
import OurWork from './OurWork';
import Ambitious from './Ambitious'
import CartCheckout from './CartCheckout';
import MakeYourOwn from './MakeYourOwn';
import PuzzleViewer from './PuzzleViewer';
import React from "react";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
        <hr /><hr /><hr />
        <OurWork />
        <hr /><hr /><hr />
        <PuzzleViewer />
        <hr /><hr /><hr />
        <PremadeWork />
        <hr /><hr /><hr />
        <MakeYourOwn />
        <hr /><hr /><hr />
        <CartCheckout />
        <hr /><hr /><hr />
        <Ambitious />
      </div>
  );
}

export default App;