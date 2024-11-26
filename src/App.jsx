import { initialColors } from "./lib/colors";
import ColorList from "./Components/ColorList";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [formSubmitType, setFormSubmitType] = useState("ADD COLOR");
  console.log(colors);
  function handleFormSubmitType(type) {
    setFormSubmitType(type);
  }

  function handleEditColor(colorToUpdate, key) {
    setColors(
      colors.map((color) => {
        if (color.id === key)
          return {
            ...color,
            role: colorToUpdate.role,
            hex: colorToUpdate["hex-text-input"],
            contrastText: colorToUpdate["contrast-text-input"],
          };
      })
    );
    console.log("color handled!");
    console.log(colorToUpdate);
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
      {/* checks if array is empty and renders either p or div. Is there a better way? */}
      {colors.length === 0 ? (
        <p>No colors here...start by adding one!</p>
      ) : (
        <ColorList
          onDeleteColor={handleDeleteColor}
          colors={colors}
          submitType={"EDIT COLOR"}
          onhandleFormSubmitType={handleFormSubmitType}
          onEditColor={handleEditColor}
        />
      )}
    </>
  );
}

export default App;
