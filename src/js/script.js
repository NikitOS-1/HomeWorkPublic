function submitData() {
  const textInput = document.getElementById("textInput");
  const text = textInput.value;

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data submitted:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
