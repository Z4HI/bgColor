const background = document.querySelector('.main');
const button = document.getElementById("button");
const color = document.querySelector('.color');
const counter = document.querySelector('#counter');

count = 0;

window.addEventListener('load',() =>{
    Color = randomColor()
    background.style.backgroundColor = Color;
})

button.addEventListener('click', () => {
    count++
    Color = randomColor()
    background.style.backgroundColor = Color;
    color.innerHTML = Color
    counter.innerHTML = count;
})

const randomColor = () =>{
    
    const symbols = "0123456789ABCDEF";
    var color = "#";
    for(var i =0;i<6;i++){
        color = color+symbols[Math.floor(Math.random()*16)];
    }
    return color;
}


