import searchFilter from './searchFilter.js'

const d = document

d.addEventListener('DOMContentLoaded', () => {
  searchFilter('.button-location', '.card')
})

d.addEventListener('click', (e) => {
  console.log(e.target)
})
