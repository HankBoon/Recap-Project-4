import { useState } from "react";
import "./ButtonContainer.css";
import DeleteButtonExpanded from "./DeleteButtonExpanded";
import EditButton from "./EditButton";

export default function ButtonContainer({
  onDeleteColor,
  colorToDelete,
  onEditColor,
}) {
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const [editButtonClicked, seteditButtonClicked] = useState(false);

  function handleToggleDeleteButton() {
    setDeleteButtonClicked(!deleteButtonClicked);
  }

  return (
    <>
      <div className="delete-button-container">
        {!deleteButtonClicked ? (
          <>
            <button onClick={() => handleToggleDeleteButton()}> DELETE</button>
          </>
        ) : (
          <DeleteButtonExpanded
            colorToDelete={colorToDelete}
            onDeleteColor={onDeleteColor}
            onClickToggle={handleToggleDeleteButton}
          />
        )}

        {/* <EditButton onEditColor={onEditColor} /> */}
      </div>
    </>
  );
}
