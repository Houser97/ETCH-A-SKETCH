function createContainers() {
    
    const mainContainer = document.querySelector('.mainContainer');
    let heightMainCont = mainContainer.offsetHeight;
    let widthMainCont = mainContainer.offsetWidth;

    // Por cambiar
    let numPixels = 64;
    let desiredVerticalEdge = numPixels;
    let desiredHorizontalEdge = numPixels;

    let desiredArea = desiredHorizontalEdge * desiredVerticalEdge;
    let pixelHeight = 100*(heightMainCont/desiredVerticalEdge)/100;
    let pixelWidth = 100*(widthMainCont/desiredHorizontalEdge)/100;

    for(let i = 1; i<=desiredArea; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.height = `${pixelHeight}px`;
        div.style.width = `${pixelWidth}px`;
        mainContainer.appendChild(div);
    }
}

createContainers();

function paintBlack(event) {
    event.target.classList.add('black');
}

const pixel = document.querySelectorAll('.pixel');
pixel.forEach(container => container.addEventListener('mouseover', paintBlack));