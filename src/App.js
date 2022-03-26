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
      <div className="main">
        <div className="nav">
          <div className="header">
            <h1>Vehicle Data</h1>
            <h2>{time.toDateString()}</h2>
          </div>
          <div>
            <Search inputval={inputval} />
          </div>
        </div>
        <div className="App">
          <Employee className="emp" search={search} />
        </div>
      </div>
    </>
  );
}
