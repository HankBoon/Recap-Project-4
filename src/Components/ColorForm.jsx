import "./ColorForm.css";
import "../index.css";
import ColorInput from "./ColorInput";

export default function ColorForm({ onSubmitNewColor }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onSubmitNewColor(data);
    event.target.reset();
  }

  return (
    <form className="color-form" onSubmit={handleFormSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" placeholder="some color" />

      <ColorInput id="hex-text-input" labelValue="Hex" />
      <ColorInput id="contrast-text-input" labelValue="Contrast Text" />

      <button type="submit">ADD Color</button>
    </form>
  );
}
