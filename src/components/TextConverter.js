import React, { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TextConverter(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  //validating is string empty
  const validateText = (msg) => {
    if (text.trim()) {
      props.setAlertMsg(msg, "success");
    } else {
      props.setAlertMsg("Please enter text", "error");
    }
  };

  const [pasteAnime, setpasteAnime] = useState("fa-regular fa-paste");

  const handlePaste = () => {
    setpasteAnime("fa-regular fa-paste fa-beat");
    setTimeout(() => setpasteAnime("fa-regular fa-paste"), 1000);
    if (navigator.clipboard) {
      navigator.clipboard
        .readText()
        .then((text) => {
          if (text.trim() !== "") {
            setText(text);
            props.setAlertMsg("Text pasted", "success");
          } else {
            props.setAlertMsg("Nothing to paste", "warning");
          }
        })
        .catch((err) => {
          props.setAlertMsg(err.message, "error");
        });
    }
  };

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

  const handleSentanceCase = () => {
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
  };

  const handleWhiteSpace = () => {
    setText(wordArray.join(" "));
    validateText("White space removed");
  };

  const handleReverse = () => {
    setText([...wordArray].reverse().join(" "));
    validateText("Text reversed");
  };

  const handleClear = () => {
    setText("");
    props.setAlertMsg("Cleared", "success");
  };

  const [copyAnime, setCopyAnime] = useState("fa-regular fa-copy");
  const handleCopy = () => {
    setCopyAnime("fa-regular fa-copy fa-bounce");
    setTimeout(() => setCopyAnime("fa-regular fa-copy"), 1000);
    navigator.clipboard.writeText(text);
    validateText("Text copied");
    setText("");
  };

  const wordArray = text.trim() ? text.split(/\s+/) : [];

  return (
    <>
      <div className="mb-3 my-2 mx-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleChange}
          rows="3"
        ></textarea>
        <div className="my-2 ">
          <button onClick={handlePaste} className="btn btn-info my-1 mx-2">
            {/* <FontAwesomeIcon icon="fa-regular fa-clipboard" bounce style={{color: "#ffffff",}} />  */}
            <i className={pasteAnime}></i> Paste
          </button>

          <button
            onClick={handleUpperClick}
            className="btn btn-primary my-1 mx-2"
          >
            CONVERT TO UPPER CASE
          </button>
          <button onClick={handleLower} className="btn btn-primary my-1 mx-2">
            convert to lowercase
          </button>
          <button onClick={handleCamel} className="btn btn-primary my-1 mx-2">
            Convert To Camelcase
          </button>

          <button
            onClick={handleSentanceCase}
            className="btn btn-primary my-1 mx-2"
          >
            Convert to sentancecase
          </button>

          <button
            onClick={handleWhiteSpace}
            className="btn btn-primary my-1 mx-2"
          >
            Remove extra white space
          </button>

          <button onClick={handleReverse} className="btn btn-primary my-1 mx-2">
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
          <button onClick={handleCopy} className="btn btn-success my-1 mx-2">
            <i className={copyAnime}></i> Copy
          </button>
        </p>
      </div>
    </>
  );
}
