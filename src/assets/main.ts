import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <img src="static/hero.png" class="hero">
  <h1>Hello Vite with 11ty!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank" class="app-link">Documentation</a>
`
