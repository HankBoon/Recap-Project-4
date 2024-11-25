import { useState } from "react";

export default function ColorInput({ labelValue, id, className }) {
  const [colorValue, setColorValue] = useState("");
  return (
    <>
      <label className={className} htmlFor={id}>
        {labelValue}
      </label>
      <div className={className}>
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
      </div>
    </>
  );
}
