let toggleColor = document.getElementById('toggle-color')
let onButton = document.getElementById('on-btn')
let offButton = document.getElementById('off-btn')

function onClick() {
    toggleColor.style.left = '-4px'
    toggleColor.style.backgroundColor = '#64BA40'
    onButton.style.color = 'white';
    offButton.style.color = 'black';
}

function offClick() {
    toggleColor.style.left = '76px'
    toggleColor.style.backgroundColor = '#E84C3D'
    onButton.style.color='black';
    offButton.style.color = 'white';
}