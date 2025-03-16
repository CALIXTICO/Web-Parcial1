import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";

//Internacionalización
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import Login from "./Login";
import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart";
import Stores from "./Stores";

function App() {

  //Determinar lenguaje del browser  
  const messages = {
    es: localeEsMessages,
    en: localeEnMessages}
  
  function obtenerIdiomaBrowser () {
    
    let idioma = navigator.language || navigator.languages[0] || "en";
    idioma = idioma.split("-")[0];
    
    return messages[idioma] ? idioma : "en";
  };

  const [idioma, setIdioma] = useState("en");

  useEffect(() => {
    const idioma = obtenerIdiomaBrowser();
    setIdioma(idioma);
  },[]);

  return (
    <IntlProvider locale={idioma} messages= {messages[idioma]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/menu" element={<Menu />} />
          <Route path="/home/stores" element={<Stores />} />
          <Route path="/home/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
