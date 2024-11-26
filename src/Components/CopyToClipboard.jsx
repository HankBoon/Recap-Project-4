import { useState, useEffect } from "react";

export default function CopyToClipboard({ hexCode }) {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  async function handleCopyToClipboard(hexCode) {
    setCopiedToClipboard(true);
    await navigator.clipboard.writeText(hexCode);
  }
  useEffect(() => {
    const timer = setTimeout(() => setCopiedToClipboard(false), 5000);
    console.log(timer);
    return () => clearTimeout(timer);
  }, [copiedToClipboard]);

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
