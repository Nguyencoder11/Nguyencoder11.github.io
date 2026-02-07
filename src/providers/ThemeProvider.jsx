import { useState, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(t => (t === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved) setTheme(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}