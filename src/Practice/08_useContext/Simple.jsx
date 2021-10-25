import { useContext } from 'react'
import { AppContext } from '../../App'
import { setThemeToLocalStorage } from './util'
import './simple.css'
function Simple() {
  const { theme, setTheme } = useContext(AppContext)

  function onClick() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setThemeToLocalStorage(newTheme)
    setTheme(newTheme)
  }

  return (
    <div className={`${theme === 'dark' ? 'containerDark' : 'container'}`}>
      <p className={`container ${theme === 'dark' ? 'dark' : ''}`}>
        Random text
      </p>
      <button
        onClick={onClick}
        className={`container ${theme === 'dark' ? 'dark' : ''}`}
      >
        Click
      </button>
    </div>
  )
}
export default Simple
