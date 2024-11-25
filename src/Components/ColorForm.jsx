export default function ColorForm() {
  return (
    <form>
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" placeholder="some color" />
      <label htmlFor="hex_text_input">Hex</label>
      <input
        type="text"
        id="hex_text_input"
        name="hex_text_input"
        placeholder="#123456"
      />
      <input type="color" id="hex_color_picker" />
      <label htmlFor="contrast_text">Contrast Text</label>
      <input
        type="text"
        id="contrast_text"
        name="contrast_text"
        placeholder="#123456"
      />
      <input type="color" id="contrast_color_picker" />

      <button type="submit">ADD Color</button>
    </form>
  );
}
