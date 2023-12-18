function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating a poem ... please wait",
    autoStart: true,
    cursor: null,
    delay: 80,
  });
}

let poemFormElement = document.querySelector("#poem-form-element");
poemFormElement.addEventListener("submit", generatePoem);
