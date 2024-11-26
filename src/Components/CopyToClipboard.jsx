import { useState } from "react";

export default function CopyToClipboard({ hexCode }) {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  async function handleCopyToClipboard(hexCode) {
    setCopiedToClipboard(!copiedToClipboard);
    const response = await fetch(navigator.clipboard.writeText(hexCode));
    console.log(response);
  }

  return (
    <>
      {" "}
      <button
        className="copy-button"
        onClick={() => handleCopyToClipboard(hexCode)}
      >
        COPY
      </button>
      {copiedToClipboard && (
        <p className="copy-button-text">Copied to clipboard!</p>
      )}
    </>
  );
}
