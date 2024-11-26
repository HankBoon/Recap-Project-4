import { useState } from "react";

export default function EditButton({
  onEditColor,
  onClickToogle,
  submitType,
  onhandleFormSubmitType,
  onHandleFormState,
}) {
  //   const [editButtonClicked, setEditButtonClicked] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          // onEditColor();
          onClickToogle();
          onhandleFormSubmitType();
          onHandleFormState();
        }}
      >
        EDIT
      </button>
    </>
  );
}
