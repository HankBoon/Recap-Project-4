import { useState } from "react";

export default function CopyToClipboard() {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  function handleCopyToClipboard() {
    setCopiedToClipboard(!copiedToClipboard);
  }

  return (
    <>
      {" "}
      <button className="copy-button" onClick={() => handleCopyToClipboard()}>
        COPY
      </button>
      {copiedToClipboard && (
        <p className="copy-button-text">Copied to clipboard!</p>
      )}
    </>
  );
}
