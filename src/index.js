function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInstruction = document.querySelector("#instructions");
  let apiKey = "e2c0b68bt1bfbc04o7da0f6ea7720334";
  let context =
    "Your are an experienced and passionate poet who writes short poems. Your mission is to provide a five line poem in basic HTML following the user instructions. You should not write a title and a signature should be written at the bottom of the poem. ONLY the signature should be written in the following format: <strong>'She Codes AI'</strong>.";
  let prompt = `User instructions: Generate a structured poem in spanish about ${userInstruction.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form-element");
poemFormElement.addEventListener("submit", generatePoem);
