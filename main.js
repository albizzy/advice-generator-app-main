const adviceContent = document.getElementById('advice-content');
const adviceRandomizer = document.getElementById('fetch-random-advice');
const number = document.getElementById('advice-number');

function getRandomAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to retrieve advice.");
            }
        })
        .then((data) => {
            if (data && data.slip && data.slip.advice) {
                const advice = data.slip.advice;
                const id = data.slip.id;

                adviceContent.textContent = advice;
                number.textContent = id;

            } else {
                throw new Error("Advice data is missing or malformed.");
            }
        })
        .catch((error) => {
            console.error("Error: " + error.message);
        });
}

adviceRandomizer.addEventListener('click', getRandomAdvice);
