import Color from "./Color/Color";

export default function ColorList({
  colors,
  onDeleteColor,
  submitType,
  onEditColor,
}) {
  return colors.map((color) => {
    return (
      <Color
        key={color.id}
        color={color}
        onDeleteColor={onDeleteColor}
        submitType={submitType}
        onEditColor={onEditColor}
      />
    );
  });
}
