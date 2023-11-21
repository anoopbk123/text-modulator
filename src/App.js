import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextConverter from './components/TextConverter';

function App() {
  return (
    <>
      <Navbar title = "Text Modulator" about = "about" />
      <TextConverter heading="Enter your Text here" />
    </>
  );
}

export default App;
