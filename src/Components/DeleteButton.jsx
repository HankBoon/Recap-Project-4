import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButton({ onDeleteColor, colorToDelete }) {
  const [deleteButton, setDeleteButton] = useState(true);
  const [editButton, setEditButton] = useState(true);

  function DeleteButton() {
    return (
      <>
        {" "}
        <button onClick={() => setDeleteButton(!deleteButton)}>DELETE</button>
        <button
          onClick={() => {
            null;
          }}
        >
          EDIT
        </button>
      </>
    );
  }

  function DeleteButtonExpanded() {
    return (
      <>
        <p>really delete this color?</p>
        <button onClick={() => setDeleteButton(!deleteButton)}>CANCEL</button>
        <button
          onClick={() => {
            onDeleteColor(colorToDelete);
            setDeleteButton(!deleteButton);
          }}
        >
          DELETE
        </button>
      </>
    );
  }

  return (
    <div className="delete-button-container">
      {/* if(!deleteButton){{ DeleteButton }} */}
      {deleteButton ? <DeleteButton /> : <DeleteButtonExpanded />}
    </div>
  );
}
