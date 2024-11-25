export default function DeleteButtonExpanded({
  onClickToggleStatus,
  onDeleteColor,
  colorToDelete,
}) {
  return (
    <>
      <p>really delete this color?</p>
      <button onClick={() => onClickToggleStatus()}>CANCEL</button>
      <button onClick={() => onDeleteColor(colorToDelete)}>DELETE</button>
    </>
  );
}
