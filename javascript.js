function createContainers() {
    
    const mainContainer = document.querySelector('.mainContainer');
    let heightMainCont = mainContainer.offsetHeight;
    let widthMainCont = mainContainer.offsetWidth;

    let desiredVerticalEdge = 64;
    let desiredHorizontalEdge = 64;

    let desiredArea = desiredHorizontalEdge * desiredVerticalEdge;
    let a = 0;

    for(let i = 1; i<=desiredArea; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.height = `${heightMainCont/desiredVerticalEdge}px`;
        div.style.width = `${widthMainCont/desiredHorizontalEdge}px`;
        mainContainer.appendChild(div);
        ++a;
    }
    return a;


}

console.log(createContainers());