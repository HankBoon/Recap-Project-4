import { useState } from "react";

export default function ColorInput({ labelValue, id }) {
  const [colorValue, setColorValue] = useState("");
  return (
    <>
      <label htmlFor={id}>{labelValue}</label>{" "}
      <input
        type="text"
        id={id}
        name={id}
        placeholder="#rrggbb"
        value={colorValue}
        onChange={(event) => setColorValue(event.target.value)}
      />
      <input
        type="color"
        id={id}
        name={id}
        value={colorValue}
        onChange={(event) => setColorValue(event.target.value)}
      />
    </>
  );
}
