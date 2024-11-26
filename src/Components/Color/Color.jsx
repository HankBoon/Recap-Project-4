import "./Color.css";
import ButtonContainer from "../ButtonContainer";
import ColorForm from "../ColorForm";
import { useState } from "react";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [colorFormVisible, setColorFormVisible] = useState(false);
  const [copiedToClipboard, setCopyToClipboard] = useState(true);

  function handleColorFormVisible() {
    console.log("edit clicked!");
    setColorFormVisible(!colorFormVisible);
  }

  return (
    <>
      <div
        className="color-card"
        style={{
          background: color.hex,
          color: color.contrastText,
        }}
      >
        <h3 className="color-card-headline">{color.hex}</h3>
        <button className="copy-button">COPY</button>
        {copiedToClipboard && (
          <p className="copy-button-text">Copied to clipboard!</p>
        )}
        <h4>{color.role}</h4>
        <p>contrast: {color.contrastText}</p>
        {colorFormVisible && (
          <ColorForm
            submitType={"EDIT COLOR"}
            onEditColor={onEditColor}
            color={color}
          />
        )}
        <ButtonContainer
          onDeleteColor={onDeleteColor}
          colorToDelete={color}
          onHandleFormVisible={handleColorFormVisible}
        />
      </div>
    </>
  );
}
