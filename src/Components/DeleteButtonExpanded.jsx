import { useState } from "react";

export default function DeleteButtonExpanded({
  colorToDelete,
  onDeleteColor,
  onToggleButton,
}) {
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);

  return (
    <>
      <p>really delete this color?</p>
      <button onClick={() => onToggleButton()}>CANCEL</button>
      <button
        onClick={() => {
          onDeleteColor(colorToDelete);
          setDeleteButtonClicked(!deleteButtonClicked);
        }}
      >
        DELETE
      </button>
    </>
  );
}
