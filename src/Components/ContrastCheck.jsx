import { useEffect } from "react";

export default async function ContrastCheck({ hex1, hex2 }) {
  async function fetchContrastApi() {
    const response = await fetch(
      "https://www.aremycolorsaccessible.com/api/are-they",
      {
        method: "POST",
        body: JSON.stringify({ colors: [hex1, hex2] }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const dataFromResponse = await response.json();
    console.log("log from ContrastCheck", dataFromResponse);
  }

  useEffect(() => {
    fetchContrastApi();
  }, [hex1, hex2]);

  return fetchContrastApi;
}

// body needs 2 color values
