
document.getElementById('comedy').addEventListener('click', hide)
document.getElementById('comedy').addEventListener('click', watchComedy)


function watchComedy() {
    document.querySelector('body').style.backgroundColor ="red";

    document.querySelector('#placeToSee')


}

function hide() {
    document.querySelector('#dramas').style.display = 'none'
}