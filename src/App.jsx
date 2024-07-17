import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Todo from './components/Todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='m-4 p-4 text-white bg-green-500 text-4xl'>
    Handling multiple slices in redux toolkit
   </h1>
   <Input/>
   <Todo/>
   </>
  )
}

export default App
