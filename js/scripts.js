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

/* Filter - Isotope */
document.addEventListener('DOMContentLoaded', function () {
  let divi = document.getElementById('cards')
  let propiedades = prop
  for (const keys in propiedades) {
    divi.innerHTML += `<div class="element-item ${propiedades[keys].tipo} ${propiedades[keys].operacion}">
	  		<a href="${propiedades[keys].web}" target="_blank">
	  			<img class="img-fluid" src="images/${propiedades[keys].imagen}" alt="alternative"  />
	  				<p>
	  				<span id="realStateTittle"><strong>${propiedades[keys].operacion}</strong></span>
	  				${propiedades[keys].descripcion}
	  				</p>
	  				</a>
	  		  </div>`
  }

  const gridCheck = document.querySelector('.grid')

  if (gridCheck !== null) {
    // init Isotope
    var iso = new Isotope('.grid', {
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
    })

    //DOCUMENT GET READY

    // bind filter button click
    var filtersElem = document.querySelector('.filters-button-group')
    filtersElem.addEventListener('click', function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, 'button')) {
        return
      }
      var filterValue = event.target.getAttribute('data-filter')
      // use matching filter function
      iso.arrange({ filter: filterValue })
    })

    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll('.button-group')
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i]
      radioButtonGroup(buttonGroup)
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener('click', function (event) {
        // only work with buttons
        if (!matchesSelector(event.target, 'button')) {
          return
        }
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked')
        event.target.classList.add('is-checked')
      })
    }
  }
})

/* Back To Top Button */
// Get the button
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
    descripcion: 'Departamento en venta 1 dormitorio a estrenar con balc??n',
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
    descripcion: 'Casa de catergor??a en venta en La Estanzuela',
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
