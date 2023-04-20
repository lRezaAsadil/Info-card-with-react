import React from "react";
import "./App.css";
import Reviews from "./Reviews";

function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="title">
          <h3>نظرات همکاران</h3>
        </div>
        <Reviews />
      </div>
    </div>
  );
}
export default App;
