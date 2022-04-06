const mainContainer = document.querySelector('.mainContainer');

function createContainers(mainContainer) {

    let heightMainCont = mainContainer.offsetHeight;
    let widthMainCont = mainContainer.offsetWidth;

    
    let numPixels = parseInt(prompt('Hi! Please enter the number of pixels you want in each side. \n Be careful, 100 is the max number you can enter.'),10);

    if(numPixels > 100) numPixels = 100;

    let desiredVerticalEdge = numPixels;
    let desiredHorizontalEdge = numPixels;

    let desiredArea = desiredHorizontalEdge * desiredVerticalEdge;
    let pixelHeight = heightMainCont/desiredVerticalEdge;
    let pixelWidth = widthMainCont/desiredHorizontalEdge;

    for(let i = 1; i<=desiredArea; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.height = `${pixelHeight}px`;
        div.style.width = `${pixelWidth}px`;
        mainContainer.appendChild(div);
    }
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach(container => container.addEventListener('mouseover', paintBlack));
}

function paintBlack(event) {
    event.target.classList.add('black');
}

function cleanSlate(event){
    const mainContainer = document.querySelector('.mainContainer');
    let firstElement = mainContainer.firstElementChild;

    while(firstElement) {
        firstElement.remove();
        firstElement = mainContainer.firstElementChild;
    }
    createContainers(mainContainer); 
}

createContainers(mainContainer);

const button = document.querySelector('.reset');
button.addEventListener('click', cleanSlate);







