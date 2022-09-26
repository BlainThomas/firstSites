let saveWhiteEl = document.getElementById("save-white-el")
let countWhiteEl = document.getElementById("count-white-el")
let saveBlackEl = document.getElementById("save-black-el")
let countBlackEl = document.getElementById("count-black-el")
let saveBlueEl = document.getElementById("save-blue-el")
let countBlueEl = document.getElementById("count-blue-el")
let saveRedEl = document.getElementById("save-red-el")
let countRedEl = document.getElementById("count-red-el")
let saveYellowEl = document.getElementById("save-yellow-el")
let countYellowEl = document.getElementById("count-yellow-el")
let saveOtherEl = document.getElementById("save-other-el")
let countOtherEl = document.getElementById("count-other-el")
let countTotalEl = document.getElementById("count-total-el")
let whiteCount = 0
let blackCount = 0
let blueCount = 0
let redCount = 0
let yellowCount = 0
let otherCount = 0
let whiteTotalCount = 0
let blackTotalCount = 0
let blueTotalCount = 0
let redTotalCount = 0
let yellowTotalCount = 0
let otherTotalCount = 0

function totalCount() {
    return ( whiteTotalCount + blackTotalCount + blueTotalCount + redTotalCount + yellowTotalCount + otherTotalCount )
}

function countStr(num) {
    return (
        num + " - "
    )
}

function clearAll() {
    whiteCount = 0
    whiteTotalCount = 0
    blackCount = 0
    blackTotalCount = 0
    blueCount = 0
    blueTotalCount = 0
    redCount = 0
    redTotalCount = 0
    yellowCount = 0
    yellowTotalCount = 0
    otherCount = 0
    otherTotalCount = 0

    countWhiteEl.textContent = whiteCount
    countBlackEl.textContent = blackCount
    countBlueEl.textContent = blueCount
    countRedEl.textContent = redCount
    countYellowEl.textContent = yellowCount
    countOtherEl.textContent = otherCount
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
    
    saveWhiteEl.textContent = ""
    saveBlackEl.textContent = ""
    saveBlueEl.textContent = ""
    saveRedEl.textContent = ""
    saveYellowEl.textContent = ""
    saveOtherEl.textContent = ""
}

// white

function incrementWhite() {
    whiteCount += 1
    countWhiteEl.textContent = whiteCount
}

function saveWhite() {
    whiteTotalCount += whiteCount
    saveWhiteEl.textContent += countStr(whiteCount)
    whiteCount = 0
    countWhiteEl.textContent = whiteCount
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

function clearWhiteAll() {
    whiteCount = 0
    whiteTotalCount = 0
    countWhiteEl.textContent = whiteCount
    saveWhiteEl.textContent = ""
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

// Black

function incrementBlack() {
    blackCount += 1
    countBlackEl.textContent = blackCount
}

function saveBlack() {
    blackTotalCount += blackCount
    saveBlackEl.textContent += countStr(blackCount)
    blackCount = 0
    countBlackEl.textContent = blackCount
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

function clearBlackAll() {
    blackCount = 0
    blackTotalCount = 0
    countBlackEl.textContent = blackCount
    saveBlackEl.textContent = ""
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

// Blue

function incrementBlue() {
    blueCount += 1
    countBlueEl.textContent = blueCount
}

function saveBlue() {
    blueTotalCount += blueCount
    saveBlueEl.textContent += countStr(blueCount)
    blueCount = 0
    countBlueEl.textContent = blueCount
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

function clearBlueAll() {
    blueCount = 0
    blueTotalCount = 0
    countBlueEl.textContent = blueCount
    saveBlueEl.textContent = ""
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

// Red

function incrementRed() {
    redCount += 1
    countRedEl.textContent = redCount
}

function saveRed() {
    redTotalCount += redCount
    saveRedEl.textContent += countStr(redCount)
    redCount = 0
    countRedEl.textContent = redCount
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

function clearRedAll() {
    redCount = 0
    redTotalCount = 0
    countRedEl.textContent = redCount
    saveRedEl.textContent = ""
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

// Yellow

function incrementYellow() {
    yellowCount += 1
    countYellowEl.textContent = yellowCount
}

function saveYellow() {
    yellowTotalCount += yellowCount
    saveYellowEl.textContent += countStr(yellowCount)
    yellowCount = 0
    countYellowEl.textContent = yellowCount
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

function clearYellowAll() {
    yellowCount = 0
    yellowTotalCount = 0
    countYellowEl.textContent = yellowCount
    saveYellowEl.textContent = ""
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

// Other

function incrementOther() {
    otherCount += 1
    countOtherEl.textContent = otherCount
}

function saveOther() {
    otherTotalCount += otherCount
    saveOtherEl.textContent += countStr(otherCount)
    otherCount = 0
    countOtherEl.textContent = otherCount
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}

function clearOtherAll() {
    otherCount = 0
    otherTotalCount = 0
    countOtherEl.textContent = otherCount
    saveOtherEl.textContent = ""
    countTotalEl.textContent = `Total saved count: ${totalCount()}`
}


