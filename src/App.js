import React, { useState } from "react";
import "./styles.css";
import Employee from "./employess";
import Search from "./Search";

export default function App() {
  const [search, setSearch] = useState("");

  const inputval = (e) => {
    setSearch(e.target.value);
  };

  const time = new Date();
  return (
    <>
      <div className="container">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      </div>
      <div className="naev">
        <div className="header">
          <h1>Employees Vehicle Data</h1>
          <h2>{time.toDateString()}</h2>
        </div>
        <div>
          <Search inputval={inputval} />
        </div>
      </div>
      <div className="App">
        <Employee className="emp" search={search} />
      </div>
    </>
  );
}
