window.onload = function () {
  scrollFunction()
  clickOnAllallRealEstate()
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

/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  spaceBetween: 70,
  breakpoints: {
    // when window is <= 991px
    991: {
      slidesPerView: 1,
    },
  },
})

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
  }
})

url = 'https://express-armanino-neg-inmb-production.up.railway.app/'
let html = ''
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    data.forEach((el) => {
      html += `<div class="card location element-item ${el.type} ${el.operation}" style="">
        <img src="${el.image}" class="card-img-top" alt="${el.title}">
        <div class="card-body">
          <p class="card-text">${el.title}</p>
        </div>
        <div class="card-footer">
          <a href="${el.url}" target="_blank" class="btn btn-primary">Ver mas</a>
        </div>
      </div>`
    })
    document.querySelector('.cards-article').innerHTML = html
  })

myButton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block'
  } else {
    myButton.style.display = 'none'
  }
}
