import { initialColors } from "./lib/colors";
import ColorList from "./Components/ColorList";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleEditColor(colorToUpdate) {
    setColors(
      colors.map((color) => {
        if (color.id === colorToUpdate.id)
          return {
            ...color,
            role: colorToUpdate.role,
            hex: colorToUpdate["hex-text-input"],
            contrastText: colorToUpdate["contrast-text-input"],
          };
        else {
          return color;
        }
      })
    );
  }

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
    console.log(colors);
  }

  function handleDeleteColor(colorToRemove) {
    setColors(colors.filter((color) => color !== colorToRemove));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        onSubmitNewColor={handleSubmitNewColor}
        submitType={"ADD COLOR"}
      />
      {colors.length === 0 ? (
        <p>No colors here...start by adding one!</p>
      ) : (
        <ColorList
          onDeleteColor={handleDeleteColor}
          colors={colors}
          submitType={"EDIT COLOR"}
          onEditColor={handleEditColor}
        />
      )}
    </>
  );
}

export default App;
