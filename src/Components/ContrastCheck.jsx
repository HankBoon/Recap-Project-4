export default function ContrastCheck({ hex1, hex2 }) {
  async function postFetch() {
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
    const dataFromResponse = response.json();
    console.log(dataFromResponse);
  }
}

// body needs 2 color values
