function handleResponse(response) {
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
  let context =
    "You are a wonderful japanese haiku poem generator full of inspiration and happy to assist. You always generate beautiful haiku's every time when asked about the provided theme and please when generating the haiku you do this in HTML format. Example format: <p>Green and small he sits,</p><p>In the pond, his home so calm,</p> <p>Toad croaks through the night.</p> please do not deviate from this format. In case you do not understand the theme or incorrect theme was provided or no theme at all, please create a haiku about choosing a theme, but always generate it provided in the HTML as seen in the example";
  let prompt = document.querySelector("#theme-input").value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

let apiKey = "1386aafaa966aa68e4520o87btc31531";
let formSubmitElement = document.querySelector("#form-submit");
formSubmitElement.addEventListener("submit", handleSubmit);
