export default function searchFilter(input, selector) {
  const d = document
  d.addEventListener('click', (e) => {
    if (e.target.matches(input)) {
      console.log(e.target)
      d.querySelectorAll(selector).forEach((el) => console.log(el.textContent))
    }
  })
}
