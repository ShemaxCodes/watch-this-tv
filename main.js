
const comedy = document.querySelector('#comedies')
const drama = document.querySelector('#dramas')

document.getElementById('comedy').addEventListener('click', comedyNext)
document.getElementById('drama').addEventListener('click', dramaNext)



// function watchComedy() {
//     document.querySelector('body').style.backgroundColor ="red";

//     document.querySelector('#placeToSee')


// }

function comedyNext() {
    comedy.classList.toggle('hidden')
    drama.classList.add('hidden')
}

function dramaNext() {
    comedy.classList.add('hidden')
    drama.classList.toggle('hidden')
}

// function hide() {
//     document.querySelector('#dramas').style.display = 'none'
// }