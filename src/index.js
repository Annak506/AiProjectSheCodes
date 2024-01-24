function generatePoem(event){
    event.preventDefault();
    
    new Typewriter("#poem", {
      strings: "Sometimes the road less travelled, is the road best left behind...",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    
    
    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);