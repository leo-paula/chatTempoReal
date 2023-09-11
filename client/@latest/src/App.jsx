import { useState } from 'react'
import './App.css'
import Join from './components/Join/Join.jsx'
import Chat from './components/Chat/Chat'

function App() {
  const [chatVisibility ,setChatVisibility] = useState(false)

  return (
      <div>
        {
          chatVisibility ? <Chat/> : <Join setChatVisibility={setChatVisibility} />
        }
      </div>
  )
}

export default App
