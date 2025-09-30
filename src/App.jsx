import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MyFlashCards from './pages/MyFlashCards'
import FlashCardDetails from './pages/flashCardDetails'
import CreateFlashCardsPage from './pages/CreateFlashCardsPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateFlashCardsPage />} />
        <Route path="/myflashcards" element={<MyFlashCards />} />
        <Route path="/flashcarddetails" element={<FlashCardDetails />} />
      </Routes>
    </Router>
  )
}

export default App