/**
 * Intro logic
 * Author: Mariana Azevedo
 * Since: 05/03/2020
 */

let width = window.innerWidth;
let height = window.innerHeight;

const intro = document.getElementsByClassName('intro')[0];
const story = document.getElementsByClassName('story')[0];
const paragraphs = document.getElementsByClassName('paragraphs')[0];
const sound = document.getElementById('sound');

intro.style.fontSize = width / 30 + 'px';
story.style.fontSize = width / 20 + 'px';
paragraphs.style.height = height + 'px';

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    intro.style.fontSize = width / 30 + 'px';
    story.style.fontSize = width / 20 + 'px';
    paragraphs.style.height = height + 'px';
});

function init() {
    intro.className = 'intro text-intro anime-intro';
    story.className = 'story text-story anime-story';
    sound.play();
}

/* Stars screen */

let canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const num = 100;
const size = 2;
const elements = [];

function beginning() {
    for (let i = 0; i < num; i++) {
        elements[i] = {
            x: Math.ceil(Math.random() * width),
            y: Math.ceil(Math.random() * height),
            size: Math.random() * size,
        };
    }
}

function snowing() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < num; i++) {
        const e = elements[i];
        ctx.beginPath();
        ctx.fillStyle = '#FFFFFF';
        ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}

beginning();
snowing();