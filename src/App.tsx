//import './App.css'
// import HelloWorld from './components/HelloWorld';
// import WelcomeUser from './components/WelcomeUser';
// import ButtonCounter from './components/ButtonCounter';
// import TextInput from './components/TextInput';
// import ToggleMessage from './components/ToggleMessage';
// import ShowDate from './components/ShowDate';
// import ColorBox from './components/ColorBox.jsx';
// import ConditionalText from './components/ConditionalText.jsx';
// import EmojiList from './components/EmojiList.jsx';
// import SimpleForm from './components/SimpleForm.jsx';
// import Prueba from './components/Prueba.jsx';
// import Greeting from './props/Gretting.js';
// import UserCard from './props/UserCard.js';
// import ParentButtonOne from './props/ParentButtonOne.js';
// import ParentIncrementButton from './props/ParentIncrementButton.js';
// import ParentInputNotifier from './props/ParentInputNotifier.js';
// import ParentUserList from './props/ParentUserList.js';
// import ParentLoginForm from './props/ParentLoginForm.js';
// import HoverFont from './useStates/HoverFont.js';
// import AccessWithLimit from './useStates/AccessWithLimit.js';
// import DocumentTitleChanger from './useStates/DocumentTitleChanger.js';
// import PostLikes from './useStates/PostLikes.js';
// import CheckboxSummary from './useStates/CheckboxSummary.js';
// import LanguageSwitcher from './useStates/LanguageSwitcher.js';
// import MultiSwitch from './useStates/MultiSwitch.js';
// import AutoCounter from './useStates/AutoCounter.js';
// import DynamicColor from './useStates/DynamicColor.js';
// import ClickHistory from './useStates/ClickHistory.js';
// import LogEffect from './useEffect/LogEffect.js';
// import FetchUser from './useEffect/FetchUser.js';
// import Clock from './useEffect/Clock.js';
// import ScrollLogger from './useEffect/ScrollLogger.js';
// import DynamicColor from './useStates/DynamicColor.js';
// import SafeFetch from './useEffect/SafeFetch.js';
// import PersistCounter from './useEffect/PersistCounter.js';

{/*function App() {
  //const userData = { name: "Carlos", age: 30 };
  return (
    <div className="App">
      <h1>¡Hola React con Vite!</h1>
      <HelloWorld />
      <WelcomeUser />

      <ButtonCounter />
      <br/>
      <TextInput />
      <br/>
      <ToggleMessage />
      <ShowDate />
      <ColorBox />
      <ConditionalText />
      <EmojiList />
      <SimpleForm />
      <Prueba />
      <Greeting name="Elian" lastname="Muriel"/>
      <UserCard user={userData} />
      <ParentButtonOne />
      <ParentIncrementButton />
      <br/>
      <ParentInputNotifier />
      <ParentUserList />
      <ParentLoginForm /> 
      <HoverFont />
      <AccessWithLimit />
      <DocumentTitleChanger />
      <PostLikes />
      <CheckboxSummary />
      <LanguageSwitcher />
      <MultiSwitch />
      <AutoCounter />
      <DynamicColor />
      <ClickHistory />
      <LogEffect />
      <FetchUser />
      <Clock />
      <ScrollLogger />
      <DynamicColor />
      <SafeFetch />
      <PersistCounter />
    </div>
  );
}

export default App;*/}
{/*import './App.css'
import React, { useState } from 'react';
import { LanguageContext } from './useContext/LanguageContext';
import LanguageToggle from './useContext/LanguageToggle';

export default function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
    </LanguageContext.Provider>
  );
}*/}
{/*
import './App.css'
import React, { useState } from 'react';
import { LoginContext } from './useContext/LoginContext';
import LoginStatus from './useContext/LoginStatus';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
    </LoginContext.Provider>
  );
}
*/}
{/*
import './App.css'
import React, { useState } from 'react';
import CartContext from './useContext/CartContext';
import CartView from './useContext/CartView';

  
  export default function App() {
    const [items, setItems] = useState([]);
    const addItem = (item) => setItems(prev => [...prev, item]);
    const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
  
    return (
      <CartContext.Provider value={{ items, addItem, removeItem }}>
        <CartView />
      </CartContext.Provider>
    );
  }
*/}

{/* 
import './App.css'
import React, { useState } from 'react';
import { ThemeContext } from './useContext/ThemeContext';
import { LanguageContext } from './useContext/LanguageContext';
import Settings from './useContext/Settings';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('es');

  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={lang}>
        <Settings />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
*/}

{/* 
import React from 'react';
import Profile from './useContext/Profile';
import type { UserContext } from './useContext/UserContext';


const user = {
  name: 'Francisco Higuera',
  email: 'francisco@example.com',
  role: 'admin'
};

export default function App() {
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

*/}


// import './App.css'
// import Contador from './useCallback/Contador';
// import ListaCallback from './useCallback/ListaCallback';
// import PadreCallback from './useCallback/PadreCallback';
// import SaludoCallback from './useCallback/SaludoCallback';
// import CirculoColorido from "./useRef/CirculoColorido";
// import FocoAutomatico from './useRef/FocoAutomatico';
// import MoverCaja from './useRef/MoverCaja';
// import ReproductorSonido from './useRef/ReproductorSonido';
// import ScrollDemo from './useRef/ScrollDemo';


// function App() {
//   const elementos = ["Uno", "Dos", "Tres", "Cuatro"];
//   return (
//     <div className="App">
//       <FocoAutomatico />
//       <CirculoColorido />
//       <ScrollDemo />
//       <ReproductorSonido />
//       <MoverCaja />
//       <Contador />
//       <PadreCallback />
//       <SaludoCallback />
//       <h2>Ejemplo de Lista: </h2>
//       <ListaCallback items={elementos} />
//     </div>
//   );
// }
// export default App;

// import './App.css'
// import ContadorLetras from './useMemo/ContadorLetras';
// import ExpensiveCalc from './useMemo/ExpensiveCalc';
// import FiltroLista from './useMemo/FiltroLista';
// import PrimosMemo from './useMemo/PrimosMemo';
// import TablaOrdenada from './useMemo/TablaOrdenada';
// import CarritoReducer from './useReducer/CarritoReducer';
// import ContadorReducer from './useReducer/ContadorReducer';
// import FormSteps from './useReducer/FormSteps';
// import FormularioReducer from './useReducer/FormularioReducer';
// import ListaReducer from './useReducer/ListaReducer';

//  function App() {
//    return (
//      <div className="App">
//        <ContadorReducer />
//        <FormularioReducer />
//        <ListaReducer />
//        <CarritoReducer />
//        <FormSteps />
//        <ExpensiveCalc />
//        <FiltroLista />
//        <TablaOrdenada />
//        <PrimosMemo />
//        <ContadorLetras />
//      </div>
//    );
// }
// export default App;

import './App.css'
import BusquedaDiferida from './useDeferredValue/BusquedaDiferida';
import GraficoDiferido from './useDeferredValue/GraficoDiferido';
import ListaOrdenada from './useDeferredValue/ListaOrdenada';
import TablaDiferida from './useDeferredValue/TablaDiferida';
import ValidacionEmail from './useDeferredValue/ValidacionEmail';
import CampoTexto from './useId/CampoTexto';
import ListaInputs from './useId/ListaInputs';
import LoginCampos from './useId/LoginCampos';
import SeccionFormulario from './useId/SeccionFormulario';
import { ControladorPanel } from './useImperativeHandle/ControladorPanel';
import { FormularioConRef } from './useImperativeHandle/FormularioConRef';
import { PadreConInput } from './useImperativeHandle/PadreConInput';
import { PaginaScroll } from './useImperativeHandle/PaginaScroll';
import { BuscadorUseTransition } from './useTransition/BuscadorUseTransition';
import { GaleriaDiferida } from './useTransition/GaleriaDiferida';
import { ListaTransicion } from './useTransition/ListaTransicion';
import { TabsUseTransition } from './useTransition/TabsUseTransition';

 function App() {
   return (
     <div className="App">
       <CampoTexto />
       <LoginCampos />
       <ListaInputs/>
       <SeccionFormulario/>
       <BuscadorUseTransition />
       <TabsUseTransition />
       <GaleriaDiferida />
       <ListaTransicion />
       <BusquedaDiferida />
       <TablaDiferida />
       <ListaOrdenada/>
       <GraficoDiferido/>
       <ValidacionEmail/>
       <PadreConInput/>
       <ControladorPanel/>
       <FormularioConRef/>
       <PaginaScroll/>
       
     </div>
   );
}
export default App;