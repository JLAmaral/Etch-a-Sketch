const resetButton = document.querySelector('button')
const container = document.querySelector('.container')

const createGrid = (createGrid) => {
  for (let i = 0; i < createGrid; i++) {
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let j = 0; j < createGrid; j++) {
    const gridBox = document.createElement('div')
    gridBox.classList.add('grid-box')
    gridBox.addEventListener('mouseenter', () => {
      gridBox.style.backgroundColor = 'black'
    })

    row.appendChild(gridBox)
    }
    container.appendChild(row)
  } 
}

createGrid(sizeOfGrid)