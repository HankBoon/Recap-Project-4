import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";
import { uid } from "uid";

// import ColorInput from "./Components/ColorInput";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleSubmitNewColor(newColor) {
    setColors([
      {
        id: uid(),
        role: newColor.role,
        hex: newColor["hex-text-input"],
        contrastText: newColor["contrast-text-input"],
      },
      ...colors,
    ]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitNewColor={handleSubmitNewColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
