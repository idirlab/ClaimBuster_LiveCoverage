const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value/2) + "%";
  slideValue.classList.add("show");
});
inputSlider.onblur = (()=>{
  slideValue.classList.remove("show");
});

document.querySelectorAll('.scroll-trigger').forEach(function(element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
});

let navbar = document.querySelector('.navbar');
let landing = document.querySelector('.landing');

window.addEventListener('scroll', () => {
    if (window.scrollY > landing.offsetHeight) {
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
});

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

let speakerNameAreas = document.querySelectorAll('.speaker-name-textbox');
let measureWidths = document.querySelectorAll('.width-measure');

function resizeTextArea(speakerNameArea, index) {
    measureWidths[index].textContent = speakerNameArea.value;
    speakerNameArea.style.width = `${measureWidths[index].offsetWidth - 30}px`;
}

speakerNameAreas.forEach((speakerNameArea, index) => {
    speakerNameArea.addEventListener("input", () => resizeTextArea(speakerNameArea, index));
});

let crossIcons = document.querySelectorAll('#cross-icon');

crossIcons.forEach((crossIcon, index) => {
    crossIcon.addEventListener("click", () => {
        // Store the index of the removed element in localStorage
        localStorage.setItem(`removedElement${index}`, true);

        speakerNameAreas[index].remove();
        measureWidths[index].remove();
        crossIcons[index].remove();
    });
});

window.onload = function() {
    crossIcons.forEach((crossIcon, index) => {
        if (localStorage.getItem(`removedElement${index}`)) {
            speakerNameAreas[index].remove();
            measureWidths[index].remove();
            crossIcons[index].remove();
        }
    });

    speakerNameAreas.forEach(resizeTextArea);
};
