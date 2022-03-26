import "./styles.css";
import Employee from "./employess";

export default function App() {
  const setSearch = () => {};
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
          <input
            className="search"
            type="text"
            placeholder="Search Employees"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="App">
        <Employee className="emp" />
      </div>
    </>
  );
}
