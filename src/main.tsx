
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BoardContext } from './components/boardContext.tsx'
import { contenido } from './functions/data.ts'



const example = ()=>{
 

  return(
    <>
  <BoardContext  contenido={contenido}>
    <App />
  </BoardContext>
  </>
  )
}
  
  ReactDOM.createRoot(document.getElementById('root')!).render(
  example()
  )




