import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Hello
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
