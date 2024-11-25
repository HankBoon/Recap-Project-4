import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButton({ onDeleteColor, colorToDelete }) {
  const [deleteButton, setDeleteButton] = useState(false);
  const [editButton, setEditButton] = useState(true);

  return (
    <div className="delete-button-container">
      {!deleteButton ? (
        <>
          <button onClick={() => setDeleteButton(!deleteButton)}>DELETE</button>
          <button
            onClick={() => {
              null;
            }}
          >
            EDIT
          </button>
        </>
      ) : (
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
      )}
    </div>
  );
}
