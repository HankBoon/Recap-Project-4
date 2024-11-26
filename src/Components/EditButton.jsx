import { useState } from "react";

export default function EditButton({ onEditColor }) {
  const [editButtonClicked, seteditButtonClicked] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          onEditColor();
          seteditButtonClicked(!editButtonClicked);
        }}
      >
        EDIT
      </button>
    </>
  );
}
