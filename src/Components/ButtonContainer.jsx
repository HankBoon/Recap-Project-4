import { useState } from "react";
import "./ButtonContainer.css";
import DeleteButtonExpanded from "./DeleteButtonExpanded";
import EditButton from "./EditButton";

export default function ButtonContainer({
  onDeleteColor,
  colorToDelete,
  onEditColor,
  submitType,
  onHandleFormState,
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
            onClickToggle={handleToggleDeleteButton}
          />
        )}
        {/* Falsch! */}
        {!deleteButtonClicked && setDeleteButtonClicked && (
          <EditButton
            onEditColor={onEditColor}
            onClickToogle={handleToggleEditButton}
            submitType={submitType}
            onHandleFormState={onHandleFormState}
          />
        )}

        {!deleteButtonClicked && !setDeleteButtonClicked && (
          <button>CANCEL</button>
        )}
      </div>
    </>
  );
}
