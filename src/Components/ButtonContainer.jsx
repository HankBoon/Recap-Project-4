import { useState } from "react";
import "./ButtonContainer.css";
import DeleteButton from "./DeleteButton";

export default function ButtonContainer({ onDeleteColor, colorToDelete }) {
  const [deleteButtonStatus, setDeleteButtonStatus] = useState(true);
  const [editButton, setEditButton] = useState(true);

  function handleDeleteButtonStatus() {
    setDeleteButtonStatus(!deleteButtonStatus);
  }

  // function DeleteButton() {
  //   return (
  //     <>
  //       {" "}
  //       <button onClick={() => setDeleteButton(!deleteButton)}>DELETE</button>
  //       <button
  //         onClick={() => {
  //           null;
  //         }}
  //       >
  //         EDIT
  //       </button>
  //     </>
  //   );
  // }

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
      {deleteButtonStatus ? (
        <DeleteButton onClickDeleteButton={handleDeleteButtonStatus} />
      ) : (
        <DeleteButtonExpanded />
      )}
    </div>
  );
}
