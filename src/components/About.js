import React, {useState} from "react";

export default function About() {

    const [mode, setMode] = useState({
        color: "black",
        backgroundColor: "white"
    });

    //to change button color for dark mode
    const [btnColor, setBtnColour] = useState({
        color: "white",
        backgroundColor: "black"
    });

    //to change button text for dark mode
    const [btnMode, setBtnMode] = useState('Enable DarkMode')
    

    const handleMode = (event) =>{
        if(mode.color == 'black'){
            setMode({
                color: "white",
                backgroundColor:"black"
            });
            
            setBtnMode('Enable LightMode');
            setBtnColour({
                color:'black',
                backgroundColor:'white'
            })
        }
        else{
            setMode({
                color: "black",
                backgroundColor:"white"
            })
            event.target.style.color = "white";
            event.target.style.backgroundColor = "black";
            setBtnMode('Enable DarkMode');
            setBtnColour({
                color:'white',
                backgroundColor:'black'
            })
        }
    }


  return (
    <div className="container" style={mode}>
        <h1 style={mode} className="my-2 mx-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={mode}>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" style={mode}>
            <button
              style={mode}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            style={mode}
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" style={mode}>
            <button
              style={mode}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            style={mode}
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" style={mode}>
            <button
              style={mode}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            style={mode}
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button style={btnColor} onClick={handleMode} type="button" className="btn btn-primary my-3">{btnMode}</button>
    </div>
  );
}
