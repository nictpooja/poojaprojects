import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import { render } from '@testing-library/react';
function App() {
  render()
  {
  return (
    <><div classname="App">

      <Greet />
      <Welcome />
    </div></>
  );
}
}
export default App;

