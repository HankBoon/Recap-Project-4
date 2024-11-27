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
    setEditButtonClicked(false);
  }
  function handleToggleEditButton() {
    setEditButtonClicked(!editButtonClicked);
    setDeleteButtonClicked(false);
  }

  function handleCancelButton() {
    setDeleteButtonClicked(false);
    setEditButtonClicked(false);
    onHandleFormVisible(false);
  }

  return (
    <>
      <div className="delete-button-container">
        {!deleteButtonClicked && !editButtonClicked && (
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
        {!deleteButtonClicked && !editButtonClicked && (
          <EditButton
            onEditColor={onEditColor}
            onToggleButton={handleToggleEditButton}
            onHandleFormVisible={onHandleFormVisible}
          />
        )}

        {!deleteButtonClicked && editButtonClicked && (
          <button onClick={() => handleCancelButton()}>CANCEL</button>
        )}
      </div>
    </>
  );
}
