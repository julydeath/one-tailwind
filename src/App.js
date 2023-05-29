import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewLetter from "./components/NewLetter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewLetter />
    </div>
  );
}

export default App;
