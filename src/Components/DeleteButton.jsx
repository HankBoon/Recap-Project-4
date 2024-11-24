import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButton({ onDeleteColor, colorToDelete }) {
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <div className="delete-button-container">
      {!buttonVisible ? (
        <button onClick={() => setButtonVisible(!buttonVisible)}>DELETE</button>
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
