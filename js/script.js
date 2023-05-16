// Variables
const cookie = document.querySelector('.cookie'),
      mkCookie = document.querySelector('#make-cookie'),
      cookieTarget = document.querySelector('#cookie-container'),
      countTarget = document.querySelector('#cookie-count')

let count = 0

// functions

// make a cookie element and attach it to the DOM
const makeCookie = function() {
  // create the elements, store as variables
  const cookie = document.createElement('div'),
        chip1 = document.createElement('div'),
        chip2 = document.createElement('div'),
        chip3 = document.createElement('div'),
        chip4 = document.createElement('div')
  
  // add the appropriate classes to the elements
  cookie.classList.add('cookie')
  chip1.classList.add('chip')
  chip2.classList.add('chip')
  chip3.classList.add('chip')
  chip4.classList.add('chip')
  
  // append the chips to the cookie
  cookie.appendChild(chip1)
  cookie.appendChild(chip2)
  cookie.appendChild(chip3)
  cookie.appendChild(chip4)

  // test placement
  cookie.style.left = `${posOrNeg(rng(0,25))}vw`

  // append the cookie to the page
  cookieTarget.appendChild(cookie)

  // call the function to the delete a cookie
  // after 1.5 seconds
  deleteCookie()
}

// increment the cookie count
const incrementCount = function() {
  count++
  countTarget.innerText = count
}

// delete cookie elements from the page
const deleteCookie = function() {
  setTimeout( _ =>{
    cookieTarget.firstElementChild.remove()
  },1500) 
}

// random number generator
const rng = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// randomly return a positive or negative number
const posOrNeg = function(input) {
  // 0 = Positive
  if (rng(0,1) === 1) {
    return 0 - input
  } else {
    return input
  }
}

// event listeners
mkCookie.addEventListener('click', _ => {
  makeCookie()
  incrementCount()
})