import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButton({ onDeleteColor, colorToDelete }) {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [editButton, setEditButton] = useState(true);

  return (
    <div className="delete-button-container">
      {!buttonVisible ? (
        <>
          <button onClick={() => setButtonVisible(!buttonVisible)}>
            DELETE
          </button>
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
          <button onClick={() => setButtonVisible(!buttonVisible)}>
            CANCEL
          </button>
          <button
            onClick={() => {
              onDeleteColor(colorToDelete);
              setButtonVisible(!buttonVisible);
            }}
          >
            DELETE
          </button>
        </>
      )}
    </div>
  );
}
