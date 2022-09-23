
let container = document.querySelector('.container')
let createGrid = (blocks = 16) => {
    document.querySelector('label').innerText = `${blocks}x${blocks}`
    // clear the grid
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }



    // create blocksxblocks in the grid
    for(let i = 0; i < blocks*blocks; i++){
        let block = document.createElement("div")
        block.classList.add('block')
        container.appendChild(block)
    }

    // change the width and height of all blocks
    let blocklength = 480/blocks + 'px'
    document.querySelectorAll('.block').forEach((block)=>{ block.style.width = blocklength;
    block.style.height = blocklength;})
    
    // change the color based on the one choosed
    choosedColor(document.querySelector('#colorchange').value)

}


let choosedColor = (color) =>{ 
document.querySelectorAll('.block').forEach((block) => block.addEventListener('click', () => {block.style.backgroundColor = color}))}

let rainbow = () => {
    let arrOfColors = [ 'red', 'green', 'yellow', 'brown', 'pink', 'blue', 'orange']
    // Start at yellow
    choosedColor(arrOfColors[2])
    // change the DOM
    document.querySelectorAll('.block').forEach((block) => block.addEventListener('click', () => {block.style.backgroundColor = arrOfColors[Math.floor(Math.random() * 7)]}))

    
}

let clearGrid = () => {
    document.querySelectorAll('.block').forEach((block) => block.style.backgroundColor = 'white')
}



// button listeners

    // rainbow
    document.querySelector('.rainbow_mode').addEventListener('click', () => {rainbow(); 
        document.querySelector('.rainbow_mode').classList.add('active')
        document.querySelector('.color_mode').classList.remove('active')
        document.querySelector('.eraser').classList.remove('active')
    })

    // eraser
    document.querySelector('.eraser').addEventListener('click', () => {choosedColor('white'); 
        document.querySelector('.eraser').classList.add('active')
        document.querySelector('.color_mode').classList.remove('active')
        document.querySelector('.rainbow_mode').classList.remove('active')
    })
    // clear
    document.querySelector('.clear').addEventListener('click', () => {
        clearGrid()
    })
    // color mode
    document.querySelector('.color_mode').addEventListener('click', () => { 
        document.querySelector('.color_mode').classList.add('active')
        document.querySelector('.eraser').classList.remove('active')
        document.querySelector('.rainbow_mode').classList.remove('active')
        choosedColor(document.querySelector('#colorchange').value)
    })
    document.querySelector('#colorchange').addEventListener('change', ()=>{
        if(document.querySelector('.color_mode').classList[1]){
            choosedColor(document.querySelector('#colorchange').value)
        }
    })

    // range change
    document.querySelector('#points').addEventListener('change', ()=> {createGrid(document.querySelector('#points').value);
    // select color mode
        document.querySelector('.color_mode').classList.add('active')
        document.querySelector('.eraser').classList.remove('active')
        document.querySelector('.rainbow_mode').classList.remove('active')
    
})

// RUNS THE GAME
    createGrid()
    document.querySelector('.color_mode').classList.add('active')
