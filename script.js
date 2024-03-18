
const DadJokesContainer = document.querySelector(".DadJokesContainer");
const jokesSection = document.querySelector(".jokesSection");
const btn = document.querySelector(".btn");




async function fetchJokes() {
    try {
        jokesSection.innerText = "Updating...";
        btn.disabled = true;
        btn.innerText = "Loading..";

        const response = await fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=1`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'x4PCQJMrn/OQV1SvpqcXtA==HYvi85ubHL8MKdqf',
                // 'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        jokesSection.innerText = result[0].joke;
        // jokesSection.style.display.border = "2px solid black";
        btn.disabled = false;
        btn.innerText = "Tell me a Joke";
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

btn.addEventListener('click' , fetchJokes);

