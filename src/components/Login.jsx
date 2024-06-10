// Login.jsx
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navRef = useRef();
  const dispatch = useDispatch();

  // Handle navigate
  const navigate = useNavigate();


  // Handle form input
  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInputs({ ...loginInputs, [name]: value });
  };

  // Login action
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/api/signin", loginInputs);
      console.log("Login successful!", response.data);
      sessionStorage.setItem("loginData", response.data.token);
      setIsAuthenticated(true);
      
      const userID = response.data.id;
      const { data: userData } = await axios.get(
        `http://localhost:3000/api/dataUser/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        }
      );
      dispatch({ type: 'STOREUSERDATA', payload: userData });
      navigate("/home");
    } catch (error) {
      console.error("Login failed!", error);
    }
  };

  const showNavrBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Header className="header">
      <div className="container">
        <Logo>
          <img src="logo-no-background-green.png" alt="JOB'S" />
        </Logo>
        <Nav ref={navRef} className="nav">
          <NavUl>
            <div class="closeMenu icon" onClick={showNavrBar}>
              <i className="fa fa-times"></i>
            </div>
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" ? "active" : ""}`}
              >
                <i className="fas fa-home"></i> <span id="acceuil">Acceuil</span>
              </Link>
            </li>
            <li>
              <Link
                to="/listes-des-offres"
                className={`${
                  location.pathname === "/listes-des-offres" ? "active" : ""
                }`}
              >
                <i className="fas fa-list"></i> <span id="offre">Liste des offres</span>
              </Link>
            </li>
            <li>
              <Link
                to="/avis-entreprises"
                className={`${
                  location.pathname === "/avis-entreprises" ? "active" : ""
                }`}
              >
                <i className="fas fa-star-half-alt"></i> <span id="avis">Avis sur les entreprises</span> 
              </Link>
            </li>
          </NavUl>
        </Nav>

        <div className="sign">
          <ul>
            <li>
              <Link
                to="/créer-compte"
                className={`${
                  location.pathname === "/créer-compte" ? "active" : ""
                }`}
                class="creer"
              >
                <i className="fas fa-user "></i>
                <span >Créer un compte</span>
              </Link>
            </li>
          </ul>
          <div class="openMenu icon" onClick={showNavrBar}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>

      <SearchBar class="content">
        <div>
          <p>Le moyen le plus simple de trouver un emploi</p>
          <div className="box">
            <input type="text" placeholder="Entrez un mot-clé" />
            <button>Rechercher</button>
          </div>
        </div>
      </SearchBar>

      <Section>
        <div className="card">
          <img src="imgs/1.png" alt="" />
          <img src="imgs/4.png" alt="" />
        </div>

        <SignInContainer>
          <div className="signin-header">
            <h2>se connecter</h2>
          </div>

          <div className="signin-options">
            <button className="btn btn-google ">
              <i className="fab fa-google"></i>
              Continuer avec Google
            </button>

            <button className="btn btn-facebook">
              <i className="fab fa-facebook"></i>
              Continuer avec Facebook
            </button>

            <div className="or-divider">
              <span>ou</span>
            </div>

            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Entrer l'adresse email"
                className="email-input"
                name='email'
                value={loginInputs.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Entrer votre mot de passe"
                className="email-input"
                name="password"
                value={loginInputs.password}
                onChange={handleChange}
              />
              <input type="submit" className="btn btn-email" value="Continuer avec email"/>
  
            </form>
          </div>

          <div className="terms-and-privacy">
            <p>
              En continuant, vous acceptez nos{" "}
              <a href="#">Conditions d'utilisation</a> et
              <a href="#"> Politique de confidentialité</a>.
            </p>
          </div>
        </SignInContainer>

        <div className="card">
          <img src="imgs/2.png" alt="" />
          <img src="imgs/3.png" alt="" />
        </div>
      </Section>

      <Footer>
        <hr />
        <ul>
          <a href="">browse job</a>
          <a href="">browse companies</a>
          <a href="">countries</a>
          <a href="">about</a>
          <a href="">help center</a>
        </ul>
        <select name="languages">
          <option value="English">English</option>
          <option value="Français">Français</option>
          <option value="العربية">العربية</option>
        </select>
        <p>&copy; Job's {new Date().getFullYear()} . All rights reserved.</p>
      </Footer>
    </Header>
  );
};

// ------------------------------------------------Styled Components

const Header = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sign {
    display: flex;
    align-items: center;
  }


  nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li a {
    padding: 10px;
    color: #454955;
    letter-spacing: 1px;
    font-size: 14px;
  }
  li a:hover {
    padding: 10px;
    color: #058c42;
    font-size: 15px;
    transition: 0.1s ease-in-out;
  }
  i {
    padding: 5px;
    margin-left: 3px;
  }
  .active {
    color: #058c42;
  }

  .icon {
    padding: 5px;
    cursor: pointer;
    display: none;
    font-size: 1.8rem;
  }

  @media only screen and (max-width:900px){
    #acceuil{
      display:none;
    }
    #offre{
      display:none;
    }
    #avis{
      display:none;
    }
  }

  @media only screen and (max-width: 800px) {
    .icon {
      display: block;
    }

    .nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      transition: 1s;
      transform: translateY(-100vh);
      background: #f2f2f2;
    }

    nav ul {
      display: flex;
      flex-direction: column;
    }

    i {
      padding: 20px;
    }

    .responsive_nav {
      transform: none;
    }

    .closeMenu {
      position: absolute;
      top: 1.3rem;
      right: 0.8rem;
    }
  }
`;

const Logo = styled.div`
  img {
    width: 150px;
    margin: 10px 50px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #454955;

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translateY(30px);
  }
  p {
    color: #f3eff5;
    font-weight: bold;
    letter-spacing: 3px;
  }

  .box {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 55%;
    margin-top: 20px;
  }
  input[type='text'] {
    margin-left: 50px;
    padding: 15px;
    width: 250px;
    outline-style: none;
    border: none;
    box-sizing: border-box;
  }

  button {
    padding: 15px;
    background-color: #16db65;
    color: #f3eff5;
    border: none;
    outline-style: none;
    cursor: pointer;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 200px;
  }

  @media only screen and (max-width: 1262px) {
    img {
      display: flex;
      flex-direction: column;
      width: auto;
      height: 130px;
    }
  }

  @media only screen and (max-width: 1049px) {
    img {
      display: none;
    }
  }
`;

const SignInContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 150px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .signin-header {
    text-align: center;
    margin-bottom: 20px;

    h2 {
      font-size: 24px;
      font-weight: 600;
    }
  }

  .signin-options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 5px;
    width: 300px;

    &.btn-google {
      background-color: #4285f4;
      color: #fff;
    }

    &.btn-facebook {
      background-color: #3b5998;
      color: #fff;
    }

    &:hover {
      background-color: #eee;
    }

    &.btn-google:hover {
      background-color: #005ff7;
      color: #fff;
    }

    &.btn-facebook:hover {
      background-color: #173a87;
      color: #fff;
    }
  }

  .or-divider {
    margin: 10px 0;
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      color: #999;
      margin: 0 10px;
    }
  }



  .password-input { 
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .email-form {
    display: flex;
    flex-direction: column;
    display: flex;


    .email-input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .btn-email {
      background-color: #fff;
      border: 1px solid;
      color: #0d0a0b;

      &:hover {
        background-color: #058c42;
        color: #fff;
        transition: all 0.3s ease-in;
      }
    }
  }

  .terms-and-privacy {
    text-align: center;
    margin-top: 10px;

    a {
      color: #007bff;
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 800px){
    .btn{
      padding:0px;
    }
  }
  
`;

const Footer = styled.footer`
  width: 100%;
  height: 90px;
  bottom: 0;
  color: #454955;

  hr {
    margin: 5px 0;
    border-top: #454955 solid;
    opacity: 0.3;
  }

  ul {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;

    a {
      color: #0d0a0b;
    }
  }

  select {
    width: 120px;
    float: right;
    transform: translateY(-20px);
    margin-right: 15px;
  }

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    margin-top: 15px;
  }
`;


export default Login;
