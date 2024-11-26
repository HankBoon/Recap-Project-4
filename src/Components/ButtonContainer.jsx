import { useState } from "react";
import "./ButtonContainer.css";

export default function ButtonContainer({ onDeleteColor, colorToDelete }) {
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
