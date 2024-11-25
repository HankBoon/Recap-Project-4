import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButton({ onDeleteColor, colorToDelete }) {
  const [buttonStatus, setButtonStatus] = useState(false);

  return (
    <div className="delete-button-container">
      {!buttonStatus ? (
        <button onClick={() => setButtonStatus(!buttonStatus)}>DELETE</button>
      ) : (
        <>
          <p>really delete this color?</p>
          <button onClick={() => setButtonStatus(!buttonStatus)}>CANCEL</button>
          <button
            onClick={() => {
              onDeleteColor(colorToDelete);
              setButtonStatus(!buttonStatus);
              console.log(colorToDelete);
            }}
          >
            DELETE
          </button>
        </>
      )}
    </div>
  );
}
