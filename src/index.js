function showPoem(response){

     new Typewriter("#poem", {
       strings:
         response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: "",
     });

}

function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let key = "2off2634b2833t319ae9fcf5abff3024";
    let prompt = `generate a poem about ${instructionsInput.value}`;
    let context =
      "You are a writer, and like to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem at the end of the poem with 'AI Generator' inside a <strong> element. Don't change the font-family, font-weight etc.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`
    
    axios.get(apiUrl).then(showPoem);

   
    
    
    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);