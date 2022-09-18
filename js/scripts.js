/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
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
            if (el.className.includes('Departamentos')) {
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
            if (el.className.includes('Casas')) {
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
            if (el.className.includes('Oficinas')) {
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
      case 'Terrenos':
        {
          document.querySelectorAll('.card').forEach((el) => {
            if (el.className.includes('Terrenos')) {
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
            if (el.className.includes('Alquileres')) {
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
            if (el.className.includes('Ventas')) {
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

myButton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block'
  } else {
    myButton.style.display = 'none'
  }
}

let prop = [
  {
    operacion: 'Venta -',
    tipo: 'Departamentos',
    descripcion: 'Departamento en venta 1 dormitorio a estrenar con balcón',
    imagen: 'depto.jpeg',
    web:
      'https://clasificados.lavoz.com.ar/avisos/departamentos/4486468/vende-1-dorm-a-estrenar-con-balcon-45-mts-propios',
  },
  {
    operacion: 'Venta -',
    tipo: 'Casas',
    descripcion: 'Casa en venta 3 dormitorios en Villa Allende',
    imagen: 'casa.jpeg',
    web:
      'https://clasificados.lavoz.com.ar/avisos/casas/4710847/se-vende-casa-3-dorm-villa-allende',
  },
  {
    operacion: 'Venta -',
    tipo: 'Casas',
    descripcion: 'Casa de catergoría en venta en La Estanzuela',
    imagen: 'casacategoria.jpeg',
    web:
      'https://clasificados.lavoz.com.ar/avisos/casas/4710022/se-vende-casa-de-categoria-3-dorm-en-estanzuela',
  },
  {
    operacion: 'Venta -',
    tipo: 'Casas',
    descripcion: 'Casa en venta con pileta y vista a las sierras',
    imagen: 'casapileta.jpeg',
    web:
      'https://clasificados.lavoz.com.ar/avisos/casas/4742448/se-vende-casa-2-dorm-con-pileta-vista-a-sierras',
  },
]
