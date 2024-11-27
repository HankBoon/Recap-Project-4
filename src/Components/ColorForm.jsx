import "./ColorForm.css";
import "../index.css";
import ColorInput from "./ColorInput";
// import ContrastCheck from "./ContrastCheck";

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

    if (onSubmitNewColor) {
      onSubmitNewColor(data);
    }

    if (onEditColor) {
      const updatedColor = Object.fromEntries(formData);
      updatedColor.id = color.id;
      onEditColor(updatedColor);
    }
    // ContrastCheck(data["contrast-text-input"], data["hex-text-input"]);

    event.target.reset();
  }

  return (
    <form className="color-form" onSubmit={handleFormSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" placeholder="some color" />
      <ColorInput id="hex-text-input" labelValue="Hex" />
      <ColorInput id="contrast-text-input" labelValue="Contrast Text" />
      <button type="submit">{submitType}</button>
    </form>
  );
}
