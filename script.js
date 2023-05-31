const jokeEl = document.getElementById('joke');
const btnEl = document.getElementById('joke-btn');

const url = 'https://api.chucknorris.io/jokes/random';

async function fetchJoke() {
  try {
    jokeEl.textContent = 'Loading...'; // Display loading message
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Delay for 1 second
    await new Promise((resolve) => setTimeout(resolve, 500));
    jokeEl.textContent = data.value; // Display the fetched joke
  } catch (error) {
    console.error('Error:', error);
  }
}

btnEl.addEventListener('click', fetchJoke);
