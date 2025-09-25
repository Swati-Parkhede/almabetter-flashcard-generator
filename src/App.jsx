import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CreateFlashCards from './pages/CreateFlashCards'
import MyFlashCards from './pages/MyFlashCards'
import FlashCardDetails from './pages/flashCardDetails'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateFlashCards />} />
        <Route path="/myflashcards" element={<MyFlashCards />} />
        <Route path="/flashcarddetails" element={<FlashCardDetails />} />
      </Routes>
    </Router>
  )
}

export default App