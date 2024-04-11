const colors = ['red','yellow','green', 'blue', 'brown','grey'];
const lenght = 6;

function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

document.getElementById('generateButton').addEventListener('click', function() {
    const randomColor = changeColor();
    document.body.style.backgroundColor = randomColor;
});


