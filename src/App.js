import "./styles.css";
import Employee from "./employess";

export default function App() {
  const time = new Date();
  return (
    <>
      <div className="container">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      </div>
      <div className="App">
        <div className="header">
          <h1>Employees Vehicle Data</h1>
          <h2>{time.toDateString()}</h2>
        </div>
        <Employee />
      </div>
    </>
  );
}
