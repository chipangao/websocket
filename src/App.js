import './App.css';
import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import LoginPage from './pages/LoginPage';
function App() {

  const defaultTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

  const defaultLanguage = localStorage.getItem('Language')
  const [language, setLanguage] = useLocalStorage('Language', defaultLanguage);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  const swichLanguage = () => {
    const newLanguage = language === 'eng' ? 'chinese' : 'eng';
    setLanguage(newLanguage)
  }

  return (
    <div className="App" data-theme={theme}>
      <LoginPage
        switchTheme={() => switchTheme()}
        swichLanguage={() => swichLanguage()} />
    </div>
  )
}
/*<button onClick={() => switchTheme()}>
Switch to {theme} Theme
</button>*/
export default App;
