import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home }  from './pages/Home'
import { About } from './pages/About'
import { Create } from './pages/Create'

createRoot(document.getElementById('root')).render(
  // StrictMode: Responsável por manter o React atualizando.
  <StrictMode>
    <Home />
    <About />
    <Create />
  </StrictMode>,
)


// * npm i: Igual o npm install. Vai no  
// package.json e cria o node_modules.

// * npm run dev: Roda o projeto em ambiente dev
// Local: http://localhost:5173/ | Network: use --host to expose

//* Home: Não precisa do /index.jsx porque 
// ele é a primeira pasta a ser executada.

// Export default: Como default, na hora de 
// importar pode ser usado um apelido no import.

// Export: Usando só o export precisa do 
// "{}" pra especificar qual componente.

//styled-components: Para fazer css. É
// necessário baixar a extensão.