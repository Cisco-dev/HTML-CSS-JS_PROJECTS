
const btnElement = document.querySelector('.btn');

// get position of the mouse to know where to place the ripple
btnElement.addEventListener('mouseover', (event) => {
    const x = event.pageX - btnElement.offsetLeft;
    const y = event.pageY - btnElement.offsetTop;

    btnElement.style.setProperty('--ripple-top', y + 'px');
    btnElement.style.setProperty('--ripple-left', x + 'px');

});