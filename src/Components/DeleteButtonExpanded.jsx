import { useState } from "react";

export default function DeleteButtonExpanded({
  colorToDelete,
  onDeleteColor,
  onClickToggle,
}) {
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);

  return (
    <>
      <p>really delete this color?</p>
      <button onClick={() => onClickToggle()}>CANCEL</button>
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
