// Interactive Elements - Initial Implementation
const element = document.querySelector('h1');

function animateHeader() {
    element.style.transform = 'scale(1.2)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 500);
}

animateHeader();
