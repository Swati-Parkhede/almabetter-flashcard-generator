import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MyFlashCards from './pages/MyFlashCards'
import CreateFlashCardsPage from './pages/CreateFlashCardsPage'
import MainFlashCards from './pages/MainFlashCards'
import FlashCardDetailsPage from './pages/FlashCardDetailsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFlashCards />} />
        <Route path="/createFlashCardsPage" element={<CreateFlashCardsPage />} />
        <Route path="/myflashcards" element={<MyFlashCards />} />
        <Route exact path="/flashcards/:id" element={<FlashCardDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App