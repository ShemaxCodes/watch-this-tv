
const comedy = document.querySelector('#comedies')
const drama = document.querySelector('#dramas')
const action = document.querySelector('#actions')
const suspense = document.querySelector('#suspensed')
const scifi = document.querySelector('#scifis')
const documentary = document.querySelector('#documentaries')

document.getElementById('comedy').addEventListener('click', comedyNext)
document.getElementById('drama').addEventListener('click', dramaNext)
document.getElementById('action').addEventListener('click', actionNext)
document.getElementById('suspense').addEventListener('click', suspenseNext)
document.getElementById('scifi').addEventListener('click', scifiNext)
document.getElementById('documentary').addEventListener('click', docNext)
// function watchComedy() {
//     document.querySelector('body').style.backgroundColor ="red";

//     document.querySelector('#placeToSee')


// }

function comedyNext() {
    comedy.classList.toggle('hidden')
    drama.classList.add('hidden')
    action.classList.add('hidden')
    suspense.classList.add('hidden')
    scifi.classList.add('hidden')
    documentary.classList.add('hidden')
}

function dramaNext() {
    comedy.classList.add('hidden')
    drama.classList.toggle('hidden')
    action.classList.add('hidden')
    suspense.classList.add('hidden')
    scifi.classList.add('hidden')
    documentary.classList.add('hidden')
}


function actionNext() {
    comedy.classList.add('hidden')
    drama.classList.add('hidden')
    action.classList.toggle('hidden')
    suspense.classList.add('hidden')
    scifi.classList.add('hidden')
    documentary.classList.add('hidden')
}

function suspenseNext() {
    comedy.classList.add('hidden')
    drama.classList.add('hidden')
    action.classList.add('hidden')
    suspense.classList.toggle('hidden')
    scifi.classList.add('hidden')
    documentary.classList.add('hidden')
}

function scifiNext() {
    comedy.classList.add('hidden')
    drama.classList.add('hidden')
    action.classList.add('hidden')
    suspense.classList.add('hidden')
    scifi.classList.toggle('hidden')
    documentary.classList.add('hidden')
}


function docNext() {
    comedy.classList.add('hidden')
    drama.classList.add('hidden')
    action.classList.add('hidden')
    suspense.classList.add('hidden')
    scifi.classList.add('hidden')
    documentary.classList.toggle('hidden')
}


// function hide() {
//     document.querySelector('#dramas').style.display = 'none'
// }