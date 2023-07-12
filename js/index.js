let button = document.querySelector('#signIn')
button.addEventListener('click', e => {
  let cards = document.querySelectorAll('.main__card')
  cards.forEach(card => {
    card.classList.toggle('main__card_upside-down')
  })
})
