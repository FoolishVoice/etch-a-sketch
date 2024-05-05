const container = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
    const div = document.createElement("div");
    container.appendChild(div).className = "box";
}

let randomColor = function() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for ( let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const boxes = document.querySelectorAll(".box");


boxes.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `${randomColor()}`;
    });
});

