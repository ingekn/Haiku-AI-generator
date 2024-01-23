function handleResponse(response) {
  haikuElement.classList.remove("blink", "blink-text");
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
    skipAddStyles: true,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  let chosenTheme = document.querySelector("#theme-input").value;

  haikuElement.innerHTML = `Creating Haiku with the theme: ${chosenTheme}`;
  haikuElement.classList.add("blink", "blink-text");
  let apiKey = "1386aafaa966aa68e4520o87btc31531";
  let context =
    "You are a wonderful japanese haiku poem generator full of inspiration and happy to assist. You always generate beautiful haiku's every time when asked about the provided theme and please when generating the haiku you do this in HTML format. Example format: <p>Green and small he sits,</p><p>In the pond, his home so calm,</p> <p>Toad croaks through the night.</p> please do not deviate from this format. In case you do not understand the theme or incorrect theme was provided or no theme at all, please create a haiku about choosing a theme, but always generate it provided in the HTML as seen in the example";
  let prompt = chosenTheme;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

let formSubmitElement = document.querySelector("#form-submit");
formSubmitElement.addEventListener("submit", handleSubmit);
let haikuElement = document.querySelector("#haiku");
