import { useState } from "react";
import "./ButtonContainer.css";
import DeleteButtonExpanded from "./DeleteButtonExpanded";
import EditButton from "./EditButton";

export default function ButtonContainer({
  onDeleteColor,
  colorToDelete,
  onEditColor,
}) {
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  function handleToggleDeleteButton() {
    setDeleteButtonClicked(!deleteButtonClicked);
  }
  function handleToggleEditButton() {
    setEditButtonClicked(!editButtonClicked);
  }

  // return
  //   // <>
  //   //   <div className="delete-button-container">
  //   //     {!deleteButtonClicked ? (
  //   //       <>
  //   //         <button onClick={() => handleToggleDeleteButton()}> DELETE</button>
  //   //         {!editButtonClicked ? (
  // <EditButton
  //   onEditColor={onEditColor}
  //   onClickToogle={handleToggleEditButton}
  // />
  //   //         ) : (
  //   //           <button>CANCEL</button>
  //   //         )}
  //   //       </>
  //   //     ) : (
  // <DeleteButtonExpanded
  //   colorToDelete={colorToDelete}
  //   onDeleteColor={onDeleteColor}
  //   onClickToggle={handleToggleDeleteButton}
  //   //       />
  //   //     )}
  //   //   </div>
  //   // </>
  //   <></>
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
          />
        )}

        {!deleteButtonClicked && !setDeleteButtonClicked && (
          <button>CANCEL</button>
        )}
      </div>
    </>
  );
}
