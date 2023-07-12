let cats_el = document.querySelector('#cats')
let cats_add = document.querySelector('#catsAdd')
let cats_save = document.querySelector('#catsSave')
let cats_form = document.querySelector('#catsForm')
let cats_message = document.querySelector('#catsMessage')

async function fetch_cats() {
  let res = await fetch('https://roundist.whitie.ru/demo')
  let data = await res.json()
  let cats = data.data

  console.log(cats)

  cats.forEach(cat => {
    let card = document.createElement('article')
    card.classList.add('main__cat')

    let img = document.createElement('img')
    img.classList.add('main__cat-image')
    img.src = `./static/${cat.id}.png`

    let name = document.createElement('div')
    name.classList.add('main__cat-name')
    name.innerText = `${cat.name} ${cat.lastname}`

    let age = document.createElement('div')
    age.classList.add('main__cat-age')
    age.innerText = `${cat.age} y.o.`

    card.append(img)
    card.append(name)
    card.append(age)
    cats_el.append(card)
  })
}

cats_add.addEventListener('click', e => {
  cats_form.classList.toggle('main__form_visible')
})

cats_save.addEventListener('click', async e => {
  e.preventDefault()
  let new_cat = {
    id: cats_form.id.value,
    name: cats_form.name.value,
    lastname: cats_form.lastname.value,
    age: cats_form.age.value
  }
  console.log(new_cat)
  let res = await fetch('https://roundist.whitie.ru/demo', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(new_cat)
  })
  console.log(await res.status)
  if (res.status == 200) {
    cats_form.classList.remove('main__form_visible')
    cats_message.classList.add('main__message_visible')
    setTimeout(()=> {
      cats_message.classList.remove('main__message_visible')
    }, 1500)
  }
})

fetch_cats()
