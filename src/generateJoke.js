import axios from "axios"

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
  })
}

document.getElementById('jokeBtn').addEventListener('click', () => {
  document.getElementById('joke').innerHTML = 'Loading joke...'
  generateJoke()
})

export default generateJoke