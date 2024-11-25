import { useState } from "react";
import "./ButtonContainer.css";
import DeleteButton from "./DeleteButton";
import DeleteButtonExpanded from "./DeleteButtonExpanded";

export default function ButtonContainer({ onDeleteColor, colorToDelete }) {
  const [deleteButtonStatus, setDeleteButtonStatus] = useState(true);
  const [editButton, setEditButton] = useState(true);

  function handleDeleteButtonStatus() {
    setDeleteButtonStatus(!deleteButtonStatus);
  }

  return (
    <div className="delete-button-container">
      {/* if(!deleteButton){{ DeleteButton }} */}
      {deleteButtonStatus ? (
        <DeleteButton onClickToggleStatus={handleDeleteButtonStatus} />
      ) : (
        <DeleteButtonExpanded
          onClickToggleStatus={handleDeleteButtonStatus}
          onDeleteColor={onDeleteColor}
          colorToDelete={colorToDelete}
        />
      )}
    </div>
  );
}
