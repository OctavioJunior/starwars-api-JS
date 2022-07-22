const form = document.querySelector('.form')
const input = document.querySelector('.inputSearch')
const buttonPrev = document.querySelector('.btnPrev')
const buttonNext = document.querySelector('.btnNext')
const nomePersonagem = document.querySelector('.nomePersonagem')
const idadePersonagem = document.querySelector('.idadePersonagem')
const alturaPersonagem = document.querySelector('.alturaPersonagem')
const generoPersonagem = document.querySelector('.generoPersonagem')

let personagemAtivo = 1

const fetchSW = async (starWars) => {
    const swapi = await fetch(`https://swapi.dev/api/people/${starWars}`)
    if (swapi.status === 200) {
        const data = await swapi.json()
        return data
    }
}

const mostrarPersonagem = async (starWars) => {
    let data = await fetchSW(starWars)
    if (data) {
        nomePersonagem.innerHTML = data.name
        idadePersonagem.innerHTML = data.birth_year
        alturaPersonagem.innerHTML = data.height
        generoPersonagem.innerHTML = data.gender
        input.value = ''
        console.log(personagemAtivo)
    } else {
        nomePersonagem.innerHTML = "Not Found"
        idadePersonagem.innerHTML = "Not Found"
        alturaPersonagem.innerHTML = "Not Found"
        generoPersonagem.innerHTML = "Not Found"
        input.value = ''
    }
}

form.addEventListener('submit', (e) => {
        e.preventDefault()
        mostrarPersonagem(input.value.toLowerCase())
        personagemAtivo = input.value
})

buttonPrev.addEventListener('click', () => {
    if (personagemAtivo > 1) {
        personagemAtivo -= 1;
        mostrarPersonagem(personagemAtivo);
    }
  })

buttonNext.addEventListener('click', () => {
    if (personagemAtivo < 83) {
        personagemAtivo += 1;
        mostrarPersonagem(personagemAtivo);
    }
})

mostrarPersonagem(personagemAtivo)