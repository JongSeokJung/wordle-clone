const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')

let wordle

const getWordle = () => {
  fetch('http://localhost:8000/word')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      wordle = json
    })
    .catch(err => console.log(err))
}

getWordle()

const keys = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'ENTER',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  '«',
]

const guessRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
]
let currentRow = 0
let currentTile = 0
let isGameOver = false

guessRows.forEach((guessRow, guessRowIndex) => {
  const rowElement = document.createElement('div')
  rowElement.setAttribute('id', `guessRow-${guessRowIndex}`)
  rowElement.setAttribute('class', 'row')
  guessRow.forEach((guess, guessIndex) => {
    const tileElement = document.createElement('div')
    tileElement.setAttribute('id', `guessRow-${guessRowIndex}-tile-${guessIndex}`)
    tileElement.setAttribute('class', 'tile')
    rowElement.append(tileElement)
  })
  tileDisplay.append(rowElement)
})

keys.forEach(key => {
  const btnElement = document.createElement('button')
  btnElement.textContent = key;
  btnElement.setAttribute('id', key)
  btnElement.addEventListener('click', () => handleClick(key))
  keyboard.append(btnElement);
})

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const keyCode = event.keyCode;
  if (key === 'Backspace' || key === 'Enter' || (keyCode >= 65 && keyCode <= 90)) {
    handleClick(key.toUpperCase())
  }
})

const handleClick = (key) => {
  if (!isGameOver) {
    if (key === '«' || key ==='BACKSPACE') {
      deleteLetter()
    } else if (key === 'ENTER') {
      checkRow()
    } else {
      addLetter(key)
    }
  }
}

const addLetter = (letter) => {
  if (currentTile < 5 && currentRow < 6) {
    const tile = document.getElementById(`guessRow-${currentRow}-tile-${currentTile}`)
    guessRows[currentRow][currentTile] = letter
    tile.setAttribute('data', letter)
    currentTile++
    tile.textContent = letter
  }
}

const deleteLetter = () => {
  if (currentTile > 0) {
    currentTile--
    const tile = document.getElementById(`guessRow-${currentRow}-tile-${currentTile}`)
    tile.textContent = ''
    guessRows[currentRow][currentTile] = ''
    tile.setAttribute('data', '')
  }
}

const checkRow = () => {
  const guess = guessRows[currentRow].join('')
  const row = document.getElementById(`guessRow-${currentRow}`)
  if (currentTile === 5) {
    fetch(`http://localhost:8000/check/?word=${guess}`)
      .then(response => response.json())
      .then(json => {
        if (json.result_code === '200') {
          flipTile()
          if (wordle === guess) {
            showMessage('Magnificent!')
            isGameOver = true
          } else {
            if (currentRow >= 5) {
              showMessage(`Game Over, Wordle was ${wordle}`)
              isGameOver = true
            } else {
              currentRow++
              currentTile = 0
            }
          }
        } else {
          showMessage('Word not in list')
          row.classList.add('shake')
          setTimeout(() => {
            row.classList.remove('shake')
          }, 2000)
        }
      })
      .catch(err => console.log(err))
  }
}

const showMessage = (message) => {
  const messageElement = document.createElement('p')
  messageElement.textContent = message
  messageDisplay.append(messageElement)
  setTimeout(() => messageDisplay.removeChild(messageElement), 5000)
}

const addColorToKey = (letter, color) => {
  const key = document.getElementById(letter)
  key.classList.add(color)
}

const flipTile = () => {
  const rowTiles = document.querySelector(`#guessRow-${currentRow}`).childNodes
  let checkWordle = wordle

  rowTiles.forEach((tile, index) => {
    const letter = tile.getAttribute('data')
    setTimeout(() => {
      tile.classList.add('flip')
      let color = 'grey-overlay'
      if (letter === checkWordle[index]) {
        color = 'green-overlay'
        checkWordle[index] = ' '
      } else if (checkWordle.includes(letter)) {
        color = 'yellow-overlay'
        checkWordle.replace(letter, ' ')
      }
      tile.classList.add(color)
      addColorToKey(letter, color)
    }, 600 * index)
  })
}