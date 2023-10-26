import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';

function App() {
  return (
    <div className="App">
      <h1> Hello World React!</h1>
      <FirstComponent />
      < AnotherComponent />
      <Images/ >
      <Hooks />
      <List />
      <RenderCond x={8} y={10} />

    </div>
  );
}

export default App;
