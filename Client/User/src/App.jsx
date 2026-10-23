import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import History from './components/pages/History'
import BrowseQuizzes from './components/pages/BrowseQuiz'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/browse" element={<BrowseQuizzes/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
