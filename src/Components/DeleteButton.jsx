export default function DeleteButton({ onClickDeleteButton }) {
  return (
    <>
      {" "}
      <button onClick={() => onClickDeleteButton()}>DELETE</button>
      <button onClick={() => null}>EDIT</button>
    </>
  );
}
