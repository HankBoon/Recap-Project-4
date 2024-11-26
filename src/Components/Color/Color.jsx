import "./Color.css";
import ButtonContainer from "../ButtonContainer";
import ColorForm from "../ColorForm";
import { useState } from "react";

export default function Color({
  color,
  onDeleteColor,
  submitType,
  onEditColor,
}) {
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
        {colorFormState && (
          <ColorForm
            submitType={submitType}
            onEditColor={onEditColor}
            color={color}
          />
        )}
        <ButtonContainer
          onDeleteColor={onDeleteColor}
          colorToDelete={color}
          onHandleFormState={handleColorFormState}
        />
      </div>
    </>
  );
}
