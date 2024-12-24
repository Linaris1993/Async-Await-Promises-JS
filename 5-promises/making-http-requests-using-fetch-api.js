// Example of using Fetch API
fetch(`https://www.omdbapi.com/?s=batman&y=2018&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data));
