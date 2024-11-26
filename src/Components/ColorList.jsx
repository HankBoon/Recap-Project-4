import Color from "./Color/Color";

export default function ColorList({ colors, onDeleteColor }) {
  return colors.map((color) => {
    return <Color key={color.id} color={color} onDeleteColor={onDeleteColor} />;
  });
}
