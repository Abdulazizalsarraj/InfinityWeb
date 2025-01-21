import React, { useState } from "react";
import "./InteractiveFeatures.css";
import image1 from "../../assets/images/work-03.jpg";
import image2 from "../../assets/images/work-04.jpg";

const InteractiveFeatures = () => {
  const [text, setText] = useState("Click the button to see the magic!");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
    setText(
      clicked
        ? "Click the button to see the magic!"
        : "You clicked the button! Enjoy the magic!"
    );
  };

  return (
    <section className="interactive-features">
      <h2 className="interactive-title">Interactive Features</h2>
      <p className="interactive-subtitle">Experience some cool interactive features below.</p>

      <div className="interactive-container">
        <div className="interactive-feature">
          <h3>Click the Button</h3>
          <p>{text}</p>

          {clicked && (
            <div className="emoji-container">
              <span className="emoji emoji-1">😄</span>
              <span className="emoji emoji-2">😁</span>
              <span className="emoji emoji-3">😊</span>
              <span className="emoji emoji-4">😍</span>
            </div>
          )}

          <button
            onClick={handleClick}
            className={`interactive-button ${clicked ? "clicked" : ""}`}
          >
            Click Me!
          </button>
        </div>

        <div className="interactive-feature">
          <h3>Hover to Change Image</h3>
          <div className="image-container">
            <img src={image1} alt="Interactive" className="interactive-image" />
            <img src={image2} alt="Hovered" className="interactive-image-hover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
