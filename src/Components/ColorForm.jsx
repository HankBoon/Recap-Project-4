import "./ColorForm.css";
import "../index.css";
import ColorInput from "./ColorInput";
// import { useEffect } from "react";

// const [formSubmitType, setFormSubmitType] = useState("Add");

export default function ColorForm({
  onSubmitNewColor,
  submitType,
  onEditColor,
  color,
}) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(data);
    //  const newColorID = data.id;
    if (onSubmitNewColor) {
      onSubmitNewColor(data);
    }
    if (onEditColor) {
      const updatedColor = Object.fromEntries(formData);
      updatedColor.id = color.id;
      onEditColor(updatedColor);
    }

    event.target.reset();
  }

  return (
    <form className="color-form" onSubmit={handleFormSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" placeholder="some color" />
      <ColorInput id="hex-text-input" labelValue="Hex" />
      <ColorInput id="contrast-text-input" labelValue="Contrast Text" />,
      <button type="submit">{submitType}</button>
      {/* {submitType === "add" && <button type="submit">ADD COLOR</button>}
      {submitType === "update" && <button type="submit">UPDATE COLOR</button>} */}
    </form>
  );
}
