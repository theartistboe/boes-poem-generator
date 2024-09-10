function displayPoem(response) {
    console.log("poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
        });

}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "aac4foe717bf29a66f74f42ef3fte000";
    let prompt = `Generate a poem about ${instructionsInput.value}`;
    let context = `You are a romantic poem expert who and love to write whort poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Do not announce the format. Do not include a title to the poem. Sign the poem with 'Boe's Poem Generator' at the end of the poem inside a strong element. Make sure to follow the user intructions`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

   let poemElement = document.querySelector("#poem");
   poemElement.classList.remove("hidden");
   poemElement.innerHTML = `<div class="generating">Generating a simple poem about ${instructionsInput.value}</div>`
   
    console.log("Generating poem...");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);
   
 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);