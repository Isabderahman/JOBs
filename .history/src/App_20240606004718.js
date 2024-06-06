import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import Login from "./components/Login.jsx";
import Header from "./components/Home/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Emplois from "./components/Home/Emplois.jsx";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/emploi"
          element={
            <>
              <Header />
              <Emplois />
            </>
          }
        />

        <Route path="/creer-compte"/>
      </Routes>
    </div>
  );
}

export default App;
