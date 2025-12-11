import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CleanMacApp from './pages/CleanMacApp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cleanmacapp" element={<CleanMacApp />} />
    </Routes>
  )
}

export default App

