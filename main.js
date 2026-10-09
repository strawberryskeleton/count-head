
const imgGrid = document.getElementById('img-grid')
const userInputForm = document.getElementById('user-input-fields')
const restartBtn = document.querySelectorAll('.restart-btn')
let totalHeads = 0

const imgData = [
    {
        id: 1,
        name: "joint head girl",
        img_url: "./assets/guess_imgs/jointHeadGirl.jpg",
        numHeads: 1,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 2,
        name: "headless knight",
        img_url: "./assets/guess_imgs/headlessKnight_standing.jpg",
        numHeads: 0,
        isVertical: false,
        isHorizontal: true,
    },
    {
        id: 3,
        name: "croc rabbit",
        img_url: "./assets/guess_imgs/croc_rabbit.jpg",
        numHeads: 2,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 4,
        name: "3 head bear",
        img_url: "./assets/guess_imgs/bear.jpg",
        numHeads: 3,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 5,
        name: "cerberus",
        img_url: "./assets/guess_imgs/cerberus.jpg",
        numHeads: 3,
        isVertical: false,
        isHorizontal: true,
    },
    {
        id: 6,
        name: "headless knight on horse",
        img_url: "./assets/guess_imgs/headlessKnight_horse.jpg",
        numHeads: 1,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 7,
        name: "headless knight on headless horse",
        img_url: "./assets/guess_imgs/headlessKnight_headlessHorse.jpg",
        numHeads: 0,
        isVertical: false,
        isHorizontal: true,
    },
    {
        id: 8,
        name: "teapot with legs",
        img_url: "./assets/guess_imgs/teapot.jpg",
        numHeads: 0,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 10,
        name: "2 head girl",
        img_url: "./assets/guess_imgs/2headGirl.jpg",
        numHeads: 2,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 11,
        name: "double girl",
        img_url: "./assets/guess_imgs/doubleGirl.jpg",
        numHeads: 2,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 12,
        name: "headless knight on horse with fire",
        img_url: "./assets/guess_imgs/headlessKnight_horse_fire.jpg",
        numHeads: 1,
        isVertical: false,
        isHorizontal: true,
    },
    {
        id: 13,
        name: "fishes",
        img_url: "./assets/guess_imgs/fishes.jpg",
        numHeads: 3,
        isVertical: false,
        isHorizontal: true,
    },
    {
        id: 14,
        name: "cerberus puppy",
        img_url: "./assets/guess_imgs/cerberus_puppy.jpg",
        numHeads: 3,
        isVertical: false,
        isHorizontal: true,
    },
    {
        id: 15,
        name: "serpent",
        img_url: "./assets/guess_imgs/serpent.jpg",
        numHeads: 7,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 14,
        name: "2 head lamb",
        img_url: "./assets/guess_imgs/2headLamb.jpg",
        numHeads: 2,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 15,
        name: "2 head ogre",
        img_url: "./assets/guess_imgs/2headOgre.jpg",
        numHeads: 2,
        isVertical: true,
        isHorizontal: false,
    }
]

const bg_music = new Audio('./assets/bg_music.mp3')
bg_music.loop = true
bg_music.volume = 0.7
// bg_music.play()
const win_effect = new Audio('./assets/win_effect.mp3')
const lose_effect = new Audio('./assets/lose_effect.mp3')

function playOnFirstInteraction() {
    bg_music.play();
    
    document.removeEventListener('click', playOnFirstInteraction);
    document.removeEventListener('keydown', playOnFirstInteraction);
}

document.addEventListener('click', playOnFirstInteraction);
document.addEventListener('keydown', playOnFirstInteraction);


// ===================
// MAKE IMG FRAME GRID
// ===================
let numImages = Math.floor(Math.random() * imgData.length)

if (numImages == 0) numImages = 1
// console.log(numImages)


for (let i = 0; i < numImages; i++) {
    let imgIndex = Math.floor(Math.random() * imgData.length)

    // console.log(imgData[imgIndex])
    addImgFrame(imgIndex)

    totalHeads += imgData[imgIndex].numHeads

}

// console.log(totalHeads)

function addImgFrame (imgIndex) {
    // console.log(imgData[imgIndex])
    const selectedImgFrame = imgData[imgIndex]
    let imgFrame = ""

    // const imgFrame = document.createElement('div')
    // imgFrame.classList.add = "img-frame"
    
    // if (selectedImgFrame.isVertical) {
    //     imgFrame.classList.add = "vertical"
    // }
    // else if (selectedImgFrame.isHorizontal) {
    //     imgFrame.classList.add = "horizontal"
    // }

    // imgFrame.innerHTML

    if (selectedImgFrame.isVertical) {
        imgFrame = `<div class="img-frame vertical">
                <img src="${selectedImgFrame.img_url}" alt="${selectedImgFrame.name}">
            </div>`
    }
    else if (selectedImgFrame.isHorizontal) {
        imgFrame = `<div class="img-frame horizontal">
                <img src="${selectedImgFrame.img_url}" alt="${selectedImgFrame.name}">
            </div>`
    }


    imgGrid.insertAdjacentHTML('beforeend', imgFrame)
}



// ========================
// USER INPUT GET AND CHECK
// ========================
userInputForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let userGuess = new FormData(userInputForm).get('user-guess-num')
    // console.log(userGuess)

    if (userGuess == totalHeads) {
        // console.log("correct!")
        gameOver(true)
    } else {
        // console.log("wrong!")
        gameOver(false)
    }

    // remove submit functionaluty from button

})

function gameOver (isWin) {
    // remove curtains from img frames
    let currentImgFrames = document.querySelectorAll('.img-frame')
    
    currentImgFrames.forEach((frame) => {
        // console.log(frame)
        frame.classList.add('no-curtain')
    })


    // show win/lose dialog box
    let dialogBox = ''

    if (isWin) {
        // console.log("correct!")
        dialogBox = document.querySelector('.win')
        dialogBox.style.display = "block"
        win_effect.currentTime = 0; 
        win_effect.play();
    }
    else {
        // console.log("wrong!")
        dialogBox = document.querySelector('.lose')
        dialogBox.style.display = "block"
        lose_effect.currentTime = 0; 
        lose_effect.play();
    }

}

restartBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('restart')

        // reload current page --> resets everything automatically
        window.location.reload()
    })
})


// MAKE WIN?LOSE BOX FREELY DRAGGABLE
const gameOverBoxes = document.querySelectorAll('.win, .lose')
// console.log(gameOverBoxes)

gameOverBoxes.forEach((dialogBox) => {
    let startX = 0
    let startY = 0
    let initialLeft = 0
    let initialTop = 0
    let isDragging = false

    dialogBox.addEventListener('mousedown', (e) => {
        isDragging = true

        startX = e.clientX
        startY = e.clientY

        const rect = dialogBox.getBoundingClientRect()
        initialLeft = rect.left
        initialTop = rect.top


        dialogBox.style.position = 'fixed'
        dialogBox.style.transform = 'none'
        dialogBox.style.bottom = 'auto'
        dialogBox.style.right = 'auto'
        dialogBox.style.margin = '0'

        dialogBox.style.left = `${initialLeft}px`
        dialogBox.style.top = `${initialTop}px`

        e.preventDefault()
    })

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return

    
        const offsetx = e.clientX - startX
        const offsety = e.clientY - startY

        dialogBox.style.left = `${initialLeft + offsetx}px`
        dialogBox.style.top = `${initialTop + offsety}px`
    })

    window.addEventListener('mouseup', () => {
        isDragging = false
    })
})