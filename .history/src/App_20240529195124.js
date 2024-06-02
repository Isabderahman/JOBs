import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import Login from "./components/Login.js";
import Header from "./components/Home/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {Provider} from 'react-redux';
import store from "./redux/store/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />

        <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/creer-compte"></Route>
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
