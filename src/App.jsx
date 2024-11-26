import { initialColors } from "./lib/colors";
import ColorList from "./Components/ColorList";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  // const [colorsArrayIsEmpty, SetColorsArrayIsEmpty] = useState(false);
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

  function handleDeleteColor(colorToRemove) {
    setColors(colors.filter((color) => color !== colorToRemove));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitNewColor={handleSubmitNewColor} />
      {/* checks if array is empty and renders either p or div. Is there a better way? */}
      {colors.length === 0 ? (
        <p>No colors here...start by adding one!</p>
      ) : (
        <ColorList onDeleteColor={handleDeleteColor} colors={colors} />
      )}
    </>
  );
}

export default App;
