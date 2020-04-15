const SLIDE = {
  title: 'React es declarativo',
  bullets: [
    'Imperativo vs Declarativo',
    "Trabajo tedioso para hacer usando API's de navegadores",
    'React permite escribir lo que queramos hacer manipulando directamente el Virtual DOM',
  ],
}

const CLASSNAMES = {title: 'title', bullet: 'bullet'}

function createSlide(slide) {
  const slideElement = document.createElement('div')

  const title = document.createElement('h1')
  title.className = CLASSNAMES.title
  title.innerHTML = slide.title
  slideElement.appendChild(title)

  const bullets = document.createElement('ul')
  slide.bullets.forEach(bullet => {
    const bulletElement = document.createElement('li')
    bulletElement.className = CLASSNAMES.bullet
    bulletElement.innerHTML = bullet
    bullets.appendChild(bulletElement)
  })
  slideElement.appendChild(bullets)

  return slideElement
}
