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

function resizeTextArea(speakerNameArea) {
    const measureWidth = speakerNameArea.nextElementSibling;
    measureWidth.textContent = speakerNameArea.value;
    speakerNameArea.style.width = `${measureWidth.offsetWidth - 30}px`;
}

speakerNameAreas.forEach((speakerNameArea) => {
    speakerNameArea.addEventListener("input", () => resizeTextArea(speakerNameArea));
});

let crossIcons = document.querySelectorAll('#cross-icon');

const plusIcon = document.getElementById('plus-icon');

plusIcon.addEventListener('click', function() {
    const container = document.querySelector('.speakers-container');
    const index = document.querySelectorAll('.speaker-name-textbox').length;

    const newSpeakerName = document.createElement('textarea');
    newSpeakerName.classList.add('speaker-name-textbox');
    newSpeakerName.placeholder = "Enter Name";

    const newMeasureWidth = document.createElement('span');
    newMeasureWidth.classList.add('width-measure');
    newMeasureWidth.style.visibility = 'hidden';

    const newCrossIcon = document.createElement('i');
    newCrossIcon.classList.add('fa-solid', 'fa-xmark');
    newCrossIcon.id = 'cross-icon';

    container.appendChild(newSpeakerName);
    container.appendChild(newMeasureWidth);
    container.appendChild(newCrossIcon);

    newSpeakerName.addEventListener("input", () => resizeTextArea(newSpeakerName));
    newCrossIcon.addEventListener("click", () => {
        localStorage.setItem(`removedElement${index}`, true);
        newSpeakerName.remove();
        newMeasureWidth.remove();
        newCrossIcon.remove();
    });

    container.appendChild(plusIcon);
});

const plusIconHashtags = document.getElementById('plus-icon-hashtags');

plusIconHashtags.addEventListener('click', function() {
    const container = document.querySelector('.hashtags-container');
    const index = document.querySelectorAll('.hashtag-textbox').length;

    const newHashtag = document.createElement('textarea');
    newHashtag.classList.add('hashtag-textbox');
    newHashtag.placeholder = "Enter Hashtag";

    const newMeasureWidth = document.createElement('span');
    newMeasureWidth.classList.add('width-measure');
    newMeasureWidth.style.visibility = 'hidden';

    const newCrossIcon = document.createElement('i');
    newCrossIcon.classList.add('fa-solid', 'fa-xmark');
    newCrossIcon.id = `cross-icon-hashtag`; // Ensure unique ID for each cross icon

    container.appendChild(newHashtag);
    container.appendChild(newMeasureWidth);
    container.appendChild(newCrossIcon);

    newHashtag.addEventListener("input", () => resizeTextArea(newHashtag));
    newCrossIcon.addEventListener("click", () => {
        localStorage.setItem(`removedHashtagElement${index}`, true);
        newHashtag.remove();
        newMeasureWidth.remove();
        newCrossIcon.remove();
    });

    container.appendChild(plusIconHashtags);
});