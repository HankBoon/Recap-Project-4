import "./Color.css";
import ButtonContainer from "../ButtonContainer";
import ColorForm from "../ColorForm";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [colorFormState, setColorFormState] = useState(false);

  function handleColorFormState() {
    console.log("edit clicked!");
    setColorFormState(!colorFormState);
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
        <h4>{color.role}</h4>
        <p>contrast: {color.contrastText}</p>
        {colorFormState && <ColorForm />}
        <ButtonContainer
          onDeleteColor={onDeleteColor}
          colorToDelete={color}
          onEditColor={handleColorFormState}
        />
      </div>
    </>
  );
}
