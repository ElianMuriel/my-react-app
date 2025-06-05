import './App.css'
import HelloWorld from './components/HelloWorld';
import WelcomeUser from './components/WelcomeUser';
import ButtonCounter from './components/ButtonCounter';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import ShowDate from './components/ShowDate';
import ColorBox from './components/ColorBox.jsx';
import ConditionalText from './components/ConditionalText.jsx';
import EmojiList from './components/EmojiList.jsx';
import SimpleForm from './components/SimpleForm.jsx';
import Prueba from './components/Prueba.jsx';
import Greeting from './props/Gretting.js';
import UserCard from './props/UserCard.js';
import ParentButtonOne from './props/ParentButtonOne.js';
import ParentIncrementButton from './props/ParentIncrementButton.js';
import ParentInputNotifier from './props/ParentInputNotifier.js';
import ParentUserList from './props/ParentUserList.js';
import ParentLoginForm from './props/ParentLoginForm.js';
import HoverFont from './useStates/HoverFont.js';
import AccessWithLimit from './useStates/AccessWithLimit.js';
import DocumentTitleChanger from './useStates/DocumentTitleChanger.js';
import PostLikes from './useStates/PostLikes.js';
import CheckboxSummary from './useStates/CheckboxSummary.js';
import LanguageSwitcher from './useStates/LanguageSwitcher.js';
import MultiSwitch from './useStates/MultiSwitch.js';
import AutoCounter from './useStates/AutoCounter.js';
import DynamicColor from './useStates/DynamicColor.js';
import ClickHistory from './useStates/ClickHistory.js';
import LogEffect from './useEffect/LogEffect.js';
import FetchUser from './useEffect/FetchUser.js';


function App() {
  const userData = { name: "Carlos", age: 30 };
  return (
    <div className="App">
      {/* <h1>¡Hola React con Vite!</h1>
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
      <ParentLoginForm /> */}
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
    </div>
  );
}

export default App;
