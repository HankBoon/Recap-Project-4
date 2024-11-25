export default function DeleteButton({ onClickToggleStatus }) {
  return (
    <>
      {" "}
      <button onClick={() => onClickToggleStatus()}>DELETE</button>
      <button onClick={() => null}>EDIT</button>
    </>
  );
}
