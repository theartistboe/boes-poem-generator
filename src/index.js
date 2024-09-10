function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
    strings: ['A poem goes here'],
    autoStart: true,
    delay: 1,
    cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);