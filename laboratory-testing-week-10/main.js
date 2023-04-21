import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>WELCOME TO THE BEST MULTIPLY!</h1>
    <div class="inputs">
      <input type="text id="first-input"> </input>
      <input type="text id="second-input"> </input>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
