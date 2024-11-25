import "./Color.css";
import ButtonContainer from "../ButtonContainer";

export default function Color({ color, onDeleteColor }) {
  return (
    <>
      <div
        className="color-card"
        style={{
          background: color.hex,
          color: color.contrastText,
        }}
      >
        <h3 className="color-card-headline">{color.hex}</h3>
        <h4>{color.role}</h4>
        <p>contrast: {color.contrastText}</p>
        <ButtonContainer onDeleteColor={onDeleteColor} colorToDelete={color} />
      </div>
    </>
  );
}
