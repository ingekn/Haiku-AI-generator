function getAffirmation(event) {
  console.log(event);
}

function handleResponse(response) {
  console.log(response.data.answer);
  let haikuTextElement = document.querySelector("#haiku");
  haikuTextElement.innerHTML = response.data.answer;
  getAffirmation();
}

function handleSubmit(event) {
  event.preventDefault();
  let apiKey = "1386aafaa966aa68e4520o87btc31531";
  let context =
    "You are a wonderful japanese haiku poem generator full of inspiration and happy to assist. You always generate beautiful haiku's every time when asked about the provided theme and please when generating the haiku you do this in HTML format. Example format: <p>Green and small he sits,</p><p>In the pond, his home so calm,</p> <p>Toad croaks through the night.</p> please do not deviate from this format. In case you do not understand the theme or incorrect theme was provided or no theme at all, please create a haiku about choosing a theme";
  let prompt = document.querySelector("#theme-input").value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

let formSubmitElement = document.querySelector("#form-submit");
formSubmitElement.addEventListener("submit", handleSubmit);
