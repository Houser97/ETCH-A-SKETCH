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
    pixel.forEach(container => container.addEventListener('mouseover', RGBorBlack));
}

function paintBlack(event) {
    event.target.classList.add('black');
    //console.log(window.getComputedStyle(event.target).backgroundColor); //Se obtiene RGB
    //console.log(event.target.classList.length) // Se obtiene numero de elementos en la clase.
    //console.log(event.target.className.split(' ')[1]) // Se obtiene el nombre de segunda clase.
}

function getRandomRGBClass(){
    let maxNum = 3;
    let numberColor = Math.floor(Math.random()*maxNum); // [0,2]

    if(numberColor == 0){
        return 'red';
    } else if(numberColor == 1){
        return 'green';
    } else {
        return 'blue';
    }
}

function addBlack(event){
    let RGB = window.getComputedStyle(event.target).backgroundColor;
    rgbArr = RGB.substring(4, RGB.length-1).replace(/ /g, '').split(',');
    
    let red = rgbArr[0];
    let green = rgbArr[1];
    let blue = rgbArr[2];

    let stepToBlack = 255*0.1;

    let newColor = `rgb(${red-stepToBlack},${green-stepToBlack},${blue-stepToBlack})`;

    event.target.style.backgroundColor = newColor;
}

function RGBorBlack(event) {
    if(event.target.classList.length == 2){
        addBlack(event);
    } else {
        getRandomRGB(event);
    }
}

function getRandomRGB(event) {
    let nameClass = getRandomRGBClass();
    event.target.classList.add(nameClass);
}

function cleanSlate(){
    
    const mainContainer = document.querySelector('.mainContainer');
    let firstElement = mainContainer.firstElementChild;
    let keepGoing = true;

    while(keepGoing) {
        firstElement.remove();
        firstElement = mainContainer.firstElementChild;
        
        if(firstElement == null){
            keepGoing = false;
        }
    }
    createContainers(mainContainer); 
}

createContainers(mainContainer);

const button = document.querySelector('.reset');
button.addEventListener('click', cleanSlate);







