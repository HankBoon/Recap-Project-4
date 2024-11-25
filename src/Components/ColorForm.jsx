import "./ColorForm.css";
import "../index.css";

export default function ColorForm() {
  return (
    <form className="color-form">
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" placeholder="some color" />
      <label htmlFor="hex_text_input">Hex</label>
      <div className="hex-container">
        {" "}
        <input
          type="text"
          id="hex_text_input"
          name="hex_text_input"
          placeholder="#123456"
        />
        <input type="color" id="hex_color_picker" />
      </div>
      <label htmlFor="contrast_text">Contrast Text</label>
      <div className="contrast-container">
        <input
          type="text"
          id="contrast_text"
          name="contrast_text"
          placeholder="#123456"
        />
        <input type="color" id="contrast_color_picker" />
      </div>

      <button type="submit">ADD Color</button>
    </form>
  );
}
