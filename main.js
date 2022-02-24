
const comedy = document.querySelector('#comedies')
const drama = document.querySelector('#dramas')

document.getElementById('comedy').addEventListener('click', comedyNext)



// function watchComedy() {
//     document.querySelector('body').style.backgroundColor ="red";

//     document.querySelector('#placeToSee')


// }

function comedyNext() {
    comedy.classList.toggle('hidden')
    
    drama.classList.add('hidden')
}


// function hide() {
//     document.querySelector('#dramas').style.display = 'none'
// }