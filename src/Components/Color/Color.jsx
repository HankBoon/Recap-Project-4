import "./Color.css";
import ButtonContainer from "../ButtonContainer";
import ColorForm from "../ColorForm";
import { useState } from "react";
import CopyToClipboard from "../CopyToClipboard";
import { useEffect } from "react";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [colorFormVisible, setColorFormVisible] = useState(false);

  const [contrastEvaluation, setContrastEvaluation] = useState("foo");
  console.log(contrastEvaluation);

  useEffect(() => {
    async function fetchContrastApi() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const dataFromResponse = await response.json();
      setContrastEvaluation(dataFromResponse);
      console.log("log from ContrastCheck", dataFromResponse);
    }
    fetchContrastApi();
  }, [color]);

  function handleColorFormVisible() {
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
        <CopyToClipboard hexCode={color.hex} />
        <h4>{color.role}</h4>
        <p>contrast: {color.contrastText}</p>
        {colorFormVisible && (
          <ColorForm
            submitType={"EDIT COLOR"}
            onEditColor={onEditColor}
            color={color}
          />
        )}
        <p>Overall Contrast Score: {contrastEvaluation}</p>
        <ButtonContainer
          onDeleteColor={onDeleteColor}
          colorToDelete={color}
          onHandleFormVisible={handleColorFormVisible}
        />
      </div>
    </>
  );
}
