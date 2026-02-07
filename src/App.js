import { useEffect, useState, useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import ScrollNavbar from './components/layout/ScrollNavbar';
import Footer from './components/layout/Footer';
import handleScrollToTopAndCleanUrl from './utils/handleToTopUtil';
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [goToTop, setGoToTop] = useState(false)
  const handleScrollToTop = () => {
    if (window.scrollY >= 400) {
      setGoToTop(true)
    } else {
      setGoToTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollToTop)

    return () => {
      window.removeEventListener('scroll', handleScrollToTop)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <ScrollNavbar theme={theme} toggleTheme={toggleTheme} />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<Home theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
        {
          goToTop && (
            <button className={`btn-go-top u-transition u-box-shadow p-3 
              ${theme === 'light' ? 'u-accent-background text-white' : 'bg-white u-accent-text'}`}
              style={{ position: 'fixed', bottom: 20, right: 20, fontWeight: 600, borderRadius: 100 }}
              onClick={handleScrollToTopAndCleanUrl}
            >
              Top
            </button>
          )
        }
      </BrowserRouter>
    </>
  );
}

export default App;
