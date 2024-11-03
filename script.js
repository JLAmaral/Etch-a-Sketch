const resetButton = document.querySelector('button')
const container = document.querySelector('.container')

const createGrid = (createGrid) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  for (let i = 0; i < createGrid; i++) {
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let j = 0; j < createGrid; j++) {
    const widthAndHeight = 960 / createGrid
    const gridBox = document.createElement('div')
    gridBox.classList.add('grid-box')
    gridBox.style.width = '${widthAndHeight}px'
    gridBox.style.height = '${widthAndHeight}px'
    // adding mouseenter listener to change background color
    gridBox.addEventListener('mouseenter', () => {
      gridBox.style.backgroundColor = 'black'
    })
    row.appendChild(gridBox)
  }

    wrapper.appendChild(row)
  } 
  container.appendChild(wrapper)
}

resetButton.addEventListener('click', () => {
  let userSize = Number(prompt('What dimensions do you want for the new grid'))

  while (userSize > 100) {
    userSize = Number(prompt('Pick a smaller number 100 or less'))
  }

  const wrapper = document.querySelector('.wrapper')

  if (!wrapper) {
    createGrid(userSize)
  } else {
    wrapper.remove()
    createGrid(userSize)
  }


})

createGrid(createGrid)