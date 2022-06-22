import React from "react";
import "./sass/style.scss";
import Table from './components/Table';

const App: React.FC = () => {
  return (
    <div className="app__wrapper">
      <Table />
    </div>
  );
}

export default App;
