import { useState } from "react";

export default function CopyToClipboard() {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  return (
    <>
      {" "}
      <button
        className="copy-button"
        onClick={() => setCopiedToClipboard(!copiedToClipboard)}
      >
        COPY
      </button>
      {copiedToClipboard && (
        <p className="copy-button-text">Copied to clipboard!</p>
      )}
    </>
  );
}
