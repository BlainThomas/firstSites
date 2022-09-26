let colorArray = []
let schemeHtmlLine = ""



function getScheme(color, selectedScheme) {
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${selectedScheme}&count=6`)
    .then(res => res.json())
    .then(data => {
        colorArray.push(data)
        })
    setTimeout(()=>{renderScheme()}, 300)
    }

document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault()
    let color = document.getElementById("color-input").value
    let selectedScheme = document.getElementById("selected").value
    color = color.substring(1);
    getScheme(color, selectedScheme)
})



function renderScheme() {
    let schemeHtml = ""
    let colorHtml = ""
    let count = colorArray.length - 1
        for ( let l = 0; l < 6; l++){
            let there = colorArray[count].colors[l].hex.value
            colorHtml += `<div style = "margin: 10px auto; width: 100px; height: 100px; background-color: ${there};">${there}</div>`
            }
    schemeHtmlLine = `<div class="container flex">${colorHtml}</div>` + schemeHtmlLine
    console.log(colorHtml)
    document.getElementById("scheme").innerHTML =  schemeHtmlLine
}
