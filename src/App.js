import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextConverter from './components/TextConverter';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';

function App() {
  const [alert, setAlert] = useState(null);

  const setAlertMsg = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{setAlert(null)}, 3000);
  }
  
  return (
    <>
      <Navbar title = "Text Modulator" about = "about" />
      <Alert alert={alert}/>
      <About/>
      {/* <TextConverter setAlertMsg={setAlertMsg} heading="Enter your Text here" /> */}
    </>
  );
}

export default App;
