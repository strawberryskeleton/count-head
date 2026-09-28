
const imgGrid = document.getElementById('img-grid')

const imgData = [
    {
        id: 1,
        name: "joint head girl",
        img_url: "./assets/img1.jpg",
        numHeads: 1,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 2,
        name: "headless knight",
        img_url: "./assets/img2.jpg",
        numHeads: 0,
        isVertical: false,
        isHorizontal: true,
    },
    {
        id: 1,
        name: "joint head girl",
        img_url: "./assets/img1.jpg",
        numHeads: 1,
        isVertical: true,
        isHorizontal: false,
    },
    {
        id: 2,
        name: "headless knight",
        img_url: "./assets/img2.jpg",
        numHeads: 0,
        isVertical: false,
        isHorizontal: true,
    },
]

let numImages = Math.floor(Math.random() * imgData.length)

if (numImages == 0) numImages = 1
// console.log(numImages)

for (let i = 0; i < numImages; i++) {
    let imgIndex = Math.floor(Math.random() * imgData.length)

    // console.log(imgData[imgIndex])
    addImgFrame(imgIndex)

}


function addImgFrame (imgIndex) {
    console.log(imgData[imgIndex])
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