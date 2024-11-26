export default function EditButton({ onToggleButton, onHandleFormVisible }) {
  return (
    <>
      <button
        onClick={() => {
          onToggleButton();
          onHandleFormVisible();
        }}
      >
        EDIT
      </button>
    </>
  );
}
