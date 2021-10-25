export function setThemeToLocalStorage(value) {
  localStorage.setItem('theme', value)
}

export function getThemeFromLocalStorage() {
  return localStorage.getItem('theme')
}
