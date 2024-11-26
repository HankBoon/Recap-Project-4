import { useState } from "react";

export default function EditButton({ onEditColor, onClickToogle }) {
  //   const [editButtonClicked, setEditButtonClicked] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          onEditColor();
          onClickToogle();
        }}
      >
        EDIT
      </button>
    </>
  );
}
