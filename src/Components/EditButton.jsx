export default function EditButton({ onClickToogle, onHandleFormState }) {
  return (
    <>
      <button
        onClick={() => {
          onClickToogle();
          onHandleFormState();
        }}
      >
        EDIT
      </button>
    </>
  );
}
