import React, { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TextConverter(props) {
  const [text, setText] = useState("");

  //validating is string empty
  const validateText = (msg) => {
    if (text.trim()) {
      props.setAlertMsg(msg, "success");
    } else {
      props.setAlertMsg("Please enter text", "error");
    }
  };

  const handlePaste = ()=>{
    if (navigator.clipboard){
      navigator.clipboard.readText()
      .then(text =>{
        setText(text);
      })
      .catch(err => {
        props.setAlertMsg(err.message, "error")
      })
    }
    
  }

  const handleUpperClick = () => {
    const UpperCase = text.toUpperCase();
    setText(UpperCase);
    validateText("Converted to Upper case");
  };

  const handleLower = () => {
    const lowerCaseLetters = text.toLowerCase();
    setText(lowerCaseLetters);
    validateText("Converted to LowerCase");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCamel = () => {
    if (text.length > 0) {
      let camelCase = text[0].toUpperCase();
      for (let i = 1; i < text.length - 1; i++) {
        if (text[i - 1] == " ") {
          camelCase += text[i].toUpperCase();
        } else {
          camelCase += text[i].toLowerCase();
        }
      }
      setText(camelCase);
    } 
    validateText("Converted to CamelCase");
  };

  const handleSentanceCase = ()=>{
    if (text.length > 0) {
      let sentanceCase = text[0].toUpperCase();
      for (let i = 1; i < text.length - 1; i++) {
        if (text[i - 1] == " " && text[i - 2] == ".") {
          sentanceCase += text[i].toUpperCase();
        } else {
          sentanceCase += text[i].toLowerCase();
        }
      }
      setText(sentanceCase);
    } 
    validateText("Converted to Sentance Case");
  }

  const handleWhiteSpace = () => {
    setText(wordArray.join(" "));
    validateText("White space removed");
  };

  const handleReverse = () => {
    setText([...wordArray].reverse().join(" "));
    validateText("Text reversed");
  }

  const handleClear = () => {
    setText("");
    props.setAlertMsg("Cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    validateText("Text copied");
    setText("");
  };

  const wordArray = text.trim() ? text.split(/\s+/) : [];

  return (
    <>
      <div className="mb-3 my-5 mx-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleChange}
          rows="3"
        ></textarea>
        <div className="my-2 ">

        <button
            onClick={handlePaste}
            className="btn btn-primary my-1 mx-2"
          >
            {/* <FontAwesomeIcon icon="fa-regular fa-clipboard" bounce style={{color: "#ffffff",}} />  */}
            Paste
          </button>

          <button
            onClick={handleUpperClick}
            className="btn btn-primary my-1 mx-2"
          >
            Convert to Uppercase
          </button>
          <button onClick={handleLower} className="btn btn-primary my-1 mx-2">
            Convert to Lowercase
          </button>
          <button onClick={handleCamel} className="btn btn-primary my-1 mx-2">
            Convert to Camelcase
          </button>

          <button
            onClick={handleSentanceCase}
            className="btn btn-primary my-1 mx-2"
          >
            Convert to Sentancecase
          </button>

          <button
            onClick={handleWhiteSpace}
            className="btn btn-primary my-1 mx-2"
          >
            Remove extra white space
          </button>

          <button
            onClick={handleReverse}
            className="btn btn-primary my-1 mx-2"
          >
            Reverse text
          </button>
          
          <button onClick={handleClear} className="btn btn-danger my-1 mx-2">
            Clear
          </button>
        </div>
        <h4>Summary</h4>
        <p>
          Entered details consist of {text.length} characters and{" "}
          {wordArray.length} words.
        </p>
        <p>
          You can read this all details in {0.008 * wordArray.length} minute per
          word.
        </p>
        <h4>Preview</h4>
        <p>
          <textarea
            className="form-control"
            id="textarea-preview"
            value={text}
            onChange={handleChange}
            rows="3"
            readOnly
          ></textarea>
          <button onClick={handleCopy} className="btn btn-primary my-1 mx-2">
            <i className="fa fa-copy"></i> Copy
          </button>
        </p>
      </div>
    </>
  );
}
