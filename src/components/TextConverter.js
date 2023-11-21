import React, { useState } from "react";

export default function TextConverter(props) {
  
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    const UpperCase = text.toUpperCase();
    setText(UpperCase);
    props.setAlertMsg('Converted to UpperCase', 'success')
  };

  const handleLower = () => {
    const lowerCaseLetters = text.toLowerCase();
    setText(lowerCaseLetters);
    props.setAlertMsg('Converted to LowerCase', 'success')
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.setAlertMsg('Cleared', 'success')
  }

  const wordArray = text.trim() ? text.split(/\s+/)  : [];

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
            onClick={handleUpperClick}
            className="btn btn-primary my-1 mx-2"
          >
            Convert to Uppercase
          </button>
          <button onClick={handleLower} className="btn btn-primary my-1 mx-2">
            Convert to Lowercase
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
          You can read this all details in{" "}
          {0.008 * wordArray.length} minute per word.
        </p>
        <h4>Preview</h4>
        <p><textarea
          className="form-control"
          id="textarea-preview"
          value={text}
          onChange={handleChange}
          rows="3"
          readOnly
        ></textarea></p>
      </div>
    </>
  );
}
