import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  Loader,
  Footer,
  Navbar,
  Services,
  Transaction,
  Welcome,
} from "./component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
