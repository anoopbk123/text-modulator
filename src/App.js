import "./App.css";
import Navbar from "./components/Navbar";
import TextConverter from "./components/TextConverter";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const setAlertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <BrowserRouter>
      <>
        <Navbar title="Text Modulator" about="about" />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextConverter
                setAlertMsg={setAlertMsg}
                heading="Enter your Text here"
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
