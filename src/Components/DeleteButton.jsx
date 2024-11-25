import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButton() {
  const [buttonStatus, setButtonStatus] = useState(false);

  //   function handleDeleteColor(){

  //   }

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
              setButtonStatus(!buttonStatus);
            }}
          >
            DELETE
          </button>
        </>
      )}
    </div>
  );
}
