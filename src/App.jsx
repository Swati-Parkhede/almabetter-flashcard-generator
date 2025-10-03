import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MyFlashCards from './pages/MyFlashCards'
import CreateFlashCardsPage from './pages/CreateFlashCardsPage'
import MainFlashCards from './pages/MainFlashCards'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFlashCards />} />
        <Route path="/createFlashCardsPage" element={<CreateFlashCardsPage />} />
        <Route path="/myflashcards" element={<MyFlashCards />} />
      </Routes>
    </Router>
  )
}

export default App