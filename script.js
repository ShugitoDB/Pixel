console.log('Pixel Art Project Script Loaded');

const pixelGrid = document.getElementById('pixel-grid');

// Create pixels
for (let i = 0; i < 1000000; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelGrid.appendChild(pixel);
}

// Event Delegation
pixelGrid.addEventListener('click', function(event) {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = 'black';
    }
});

