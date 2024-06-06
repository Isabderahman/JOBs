import { Routes, Route, Navigate } from 'react-router-dom';
import "./style/App.css";
import { useContext } from 'react';
import AuthContext from './AuthContext';
import Login from "./components/Login.jsx";
import Header from "./components/Home/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Emplois from "./components/Home/Emplois.jsx";
import CreerCompte from "./components/creerCompte/creerCompte.jsx";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <Routes>
        <Route path="/" element={<Login />} />
        {auth.token ? (
          <>
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
            <Route path="/créer-compte" element={<CreerCompte />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
