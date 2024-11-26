import { useState } from "react";
import "./ButtonContainer.css";
import DeleteButtonExpanded from "./DeleteButtonExpanded";
import EditButton from "./EditButton";

export default function ButtonContainer({
  onDeleteColor,
  colorToDelete,
  onEditColor,
  onHandleFormVisible,
}) {
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  function handleToggleDeleteButton() {
    setDeleteButtonClicked(!deleteButtonClicked);
  }
  function handleToggleEditButton() {
    setEditButtonClicked(!editButtonClicked);
  }

  return (
    <>
      <div className="delete-button-container">
        {!deleteButtonClicked && (
          <button onClick={() => handleToggleDeleteButton()}> DELETE</button>
        )}

        {deleteButtonClicked && (
          <DeleteButtonExpanded
            colorToDelete={colorToDelete}
            onDeleteColor={onDeleteColor}
            onToggleButton={handleToggleDeleteButton}
          />
        )}
        {/* Falsch! */}
        {!deleteButtonClicked && setDeleteButtonClicked && (
          <EditButton
            onEditColor={onEditColor}
            onToggleButton={handleToggleEditButton}
            onHandleFormVisible={onHandleFormVisible}
          />
        )}

        {!deleteButtonClicked && !setDeleteButtonClicked && (
          <button>CANCEL</button>
        )}
      </div>
    </>
  );
}
