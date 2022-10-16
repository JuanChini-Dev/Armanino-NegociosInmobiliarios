window.onload = function () {
  scrollFunction()
  clickOnAllallRealEstate()

  renderData()
  // renderPagination()
}
window.onscroll = function () {
  scrollFunction()
  scrollFunctionBTT() // back to top button
}

function clickOnAllallRealEstate() {
  document.getElementById('allRealEstate').click()
}

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById('navbarExample').classList.add('top-nav-collapse')
  } else if (document.documentElement.scrollTop < 30) {
    document
      .getElementById('navbarExample')
      .classList.remove('top-nav-collapse')
  }
}

// Navbar on mobile
let elements = document.querySelectorAll('.nav-link:not(.dropdown-toggle)')

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
}

document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.offcanvas-collapse').classList.toggle('open')
})

// Hover on desktop
function toggleDropdown(e) {
  const _d = e.target.closest('.dropdown')
  let _m = document.querySelector('.dropdown-menu', _d)

  setTimeout(
    function () {
      const shouldOpen = _d.matches(':hover')
      _m.classList.toggle('show', shouldOpen)
      _d.classList.toggle('show', shouldOpen)

      _d.setAttribute('aria-expanded', shouldOpen)
    },
    e.type === 'mouseleave' ? 300 : 0,
  )
}

// On hover
const dropdownCheck = document.querySelector('.dropdown')

if (dropdownCheck !== null) {
  document
    .querySelector('.dropdown')
    .addEventListener('mouseleave', toggleDropdown)
  document
    .querySelector('.dropdown')
    .addEventListener('mouseover', toggleDropdown)

  // On click
  document.querySelector('.dropdown').addEventListener('click', (e) => {
    const _d = e.target.closest('.dropdown')
    let _m = document.querySelector('.dropdown-menu', _d)
    if (_d.classList.contains('show')) {
      _m.classList.remove('show')
      _d.classList.remove('show')
    } else {
      _m.classList.add('show')
      _d.classList.add('show')
    }
  })
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.button-location')) {
    document.querySelectorAll('.button-location').forEach((el) => {
      el.classList.remove('is-checked')
    })
    e.target.classList.add('is-checked')

    switch (e.target.dataset.filter) {
      case '*':
        {
          document.querySelectorAll('.card').forEach((el) => {
            el.classList.remove('filters')
          })
        }
        break
      case 'Departamentos':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('Apartment')) {
              el.classList.remove('filters')
            } else {
              el.classList.add('filters')
            }
          })
        }
        break
      case 'Casas':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('House')) {
              el.classList.remove('filters')
            } else {
              el.classList.add('filters')
            }
          })
        }
        break
      case 'Oficinas':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('Office')) {
              el.classList.remove('filters')
            } else {
              el.classList.add('filters')
            }
          })
        }
        break
      case 'Locales':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('Locales')) {
              el.classList.remove('filters')
            } else {
              el.classList.add('filters')
            }
          })
        }
        break
      case 'Lotes':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('Land')) {
              el.classList.remove('filters')
            } else {
              el.classList.add('filters')
            }
          })
        }
        break
      case 'Terrenos':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('Ranch')) {
              el.classList.remove('filters')
            } else {
              el.classList.add('filters')
            }
          })
        }
        break
      case 'Alquileres':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('Rent')) {
              el.classList.remove('filters')
            } else {
              el.classList.add('filters')
            }
          })
        }
        break
      case 'Ventas':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('Sale')) {
              el.classList.remove('filters')
            } else {
              el.classList.add('filters')
            }
          })
        }
        break
      default:
        break
    }

    document.querySelectorAll('.card').forEach((el) => {
      if (el.className.includes('filters')) {
        el.classList.add('d-none')
      } else {
        el.classList.remove('d-none')
      }
    })
  }
})

// url = 'https://express-armanino-neg-inmb-production.up.railway.app/'

let url = `http://localhost:3001/propiedades/`
let html = ''
let limit = 0
let offset = 100

const getData = async () => {
  const response = await fetch(url + `?limit=${limit}&offset=${offset}`)
  const data = await response.json()
  if (!data) throw new Error('No hay datos')
  return data
}
const pagination = document.querySelector('.cards-article')

const renderData = async () => {
  try {
    pagination.innerHTML = ''
    const data = await getData()
    data.forEach((el) => {
      html += `<div class="card location element-item ${el.type} ${
        el.operation
      }" style="">
        <img src="${el.image}" class="card-img-top" alt="${el.title}">
        <div class="card-body">
          <p><b>${el.operation === 'Sale' ? 'Venta' : 'Alquiler'}</b></p>
          <p class="card-text">${el.title}</p>
        </div>
        <div class="card-footer">
          <a href="${
            el.url
          }" target="_blank" class="btn btn-primary" href="">Ver mas</a>
        </div>
      </div>`
    })
    pagination.insertAdjacentHTML('beforeEnd', html)
  } catch (err) {
    console.log(err)
  }
}

// const renderPagination = async () => {
//   const response = await fetch(url)
//   const data = await response.json()

//   if (!data) throw new Error('No hay datos')
//   let pagination = document.querySelector('.pagination')
//   let html = ''
//   let pages = Math.ceil(data.length / 12)
//   for (let i = 1; i <= pages; i++) {
//     html += `<li class="page-item"><button class="page-link" data-page=${i}>${i}</button></li>`
//   }
//   pagination.insertAdjacentHTML('beforeend', html)
// }

// document.addEventListener('click', (e) => {
//   if (e.target.matches('.page-link')) {
//     document.querySelectorAll('.page-link').forEach((el) => {
//       el.parentElement.classList.remove('active')
//     })
//     e.target.parentElement.classList.add('active')

//     limit = e.target.dataset.page * 12 - 12
//     offset = e.target.dataset.page * 12

//     setTimeout(() => {
//       renderData()
//     }, 500)
//   }
// })

myButton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block'
  } else {
    myButton.style.display = 'none'
  }
}
