import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')

laughImg.src = laughing

console.log('Good and advanced stuff in this commit 😎')

console.log(generateJoke())

console.error('💥 This is an error in JS')
