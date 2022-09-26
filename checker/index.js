
let binance = true
let coinbase = true
let kucoin = true
let kraken = true
let gemini = true
let ftx = true
let defillama = true
let tradeview = true
let count = 8
let room = 10
let currentCoinbaseProducts = ""
let productId = []
let coinbaseCount = 0

let tokens = []
let currentBinancePrice = []
let currentCoinbasePrice = []
let currentCoinbaseData = []



document.getElementById("get-tokens").addEventListener("click", getTokens)
document.getElementById("roll-prices").addEventListener("click", print)
document.getElementById("get-price").addEventListener("click", getPrice)
document.getElementById("hide-binance").addEventListener("click", hideBinance)
document.getElementById("hide-coinbase").addEventListener("click", hideCoinbase)
document.getElementById("hide-kucoin").addEventListener("click", hideKucoin)
document.getElementById("hide-kraken").addEventListener("click", hideKraken)
document.getElementById("hide-gemini").addEventListener("click", hideGemini)
document.getElementById("hide-ftx").addEventListener("click", hideFTX)
document.getElementById("hide-defillama").addEventListener("click", hideDefiLlama)
document.getElementById("hide-tradeview").addEventListener("click", hideTradview)

let layout = `
<div class="flex">
  <div class="flex">
    <div class="tokens flex">Symbol Image</div>
    <div class="tokens box">Name</div>
    <div class="price box">$Price</div>
  </div> 
  <div class="flex">
    <div class="binance box price" id="binance-price">Binance</div>
    <div class="coinbase box price" id="coinbase-price">Coinbase</div>
    <div class="kucoin box price" id="kucoin-price">Kucoin</div>
    <div class="kraken box price" id="kraken-price">Kraken</div>
    <div class="gemini box price" id="gemini-price">Gemini</div>
    <div class="ftx box price" id="ftx-price">FTX</div>
    <div class="defillama box price" id="defillama-price">DefiLlama</div>
    <div class="tradeview box price" id="tradeview-price">Tradview</div>
  </div>
</div>`

document.addEventListener('DOMContentLoaded', getTokens())

function getTokens() {
  getCoingeckoTokens()
  // getCoinbaseData()
}

// function rollPrices() {
//   running = !running
//   let myTimer = setInterval(getPrice, 360)
//   if (running){
// }}

function getPrice() {
  getBinancePrice()
  getCoinbaseData()
  // getCoinbasePrice()
  // getFTX()
}

function exchangeArray() {
  for (let i = 0; i < tokens.length; i++){
    tokens[i].binanceHtml = ""
    tokens[i].coinbaseHtml = ""
    tokens[i].kucoinHtml = ""
    tokens[i].krakenHtml = ""
    tokens[i].geminiHtml = ""
    tokens[i].ftxHtml = ""
    tokens[i].defillamaHtml = ""
    tokens[i].tradeviewHtml = ""
    tokens[i].binance = ""
    tokens.coinbase = []
    tokens[i].kucoin = ""
    tokens[i].kraken = ""
    tokens[i].gemini = ""
    tokens[i].ftx = ""
    tokens[i].defillama = ""
    tokens[i].tradeview = ""
    tokens[i].binancesymbol = ""
    tokens[i].coinbasesymbol = ""
    tokens[i].kucoinsymbol = ""
    tokens[i].krakensymbol = ""
    tokens[i].geminisymbol = ""
    tokens[i].ftxsymbol = ""
    tokens[i].defillamasymbol = ""
    tokens[i].tradeviewsymbol = ""
    tokens[i].binanceprice = ""
    tokens[i].coinbaseprice = ""
    tokens[i].kucoinprice = ""
    tokens[i].krakenprice = ""
    tokens[i].geminiprice = ""
    tokens[i].ftxprice = ""
    tokens[i].defillamaprice = ""
    tokens[i].tradeviewprice = ""
  }
  setTimeout(renderTokens, 10)
}



function renderTokens() {
  // options = tokens.map(coin=> `<option>${coin.name}</option>`).join("")
  // document.getElementById("options").innerHTML = `<select>${options}</select>`
  layout += (tokens.map(coin => `
  <div class="flex">
    <div class="flex">
      <div class="tokens flex">
        ${coin.symbol.toUpperCase()}
        <img src="${coin.image}"/>
      </div>
      <div class="box tokens">${coin.name}</div>
      <div class="price box">$${coin.current_price}</div>
    </div>
    <div class="flex">
      <div class="binance box price" id="binance-${coin.symbol}">${coin.binanceHtml}</div>
      <div class="coinbase box price" id="coinbase-${coin.symbol}">${coin.coinbaseHtml}</div>
      <div class="kucoin box price" id="kucoin-${coin.symbol}">${coin.kucoinHtml}</div>
      <div class="kraken box price" id="kraken-${coin.symbol}">${coin.krakenHtml}</div>
      <div class="gemini box price" id="gemini-${coin.symbol}">${coin.geminiHtml}</div>
      <div class="ftx box price" id="ftx-${coin.symbol}">${coin.ftxHtml}</div>
      <div class="defillama box price" id="defillama-${coin.symbol}">${coin.defillamaHtml}</div>
      <div class="tradeview box price" id="tradeview-${coin.symbol}">${coin.tradeviewHtml}</div>
    </div>
  </div>`).join(""))
  document.getElementById("coingeko-price").innerHTML = layout
}





// Coingeko


function getCoingeckoTokens() {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
    .then(res => res.json())
    .then(data => tokens = data)
    .then(exchangeArray)
    .catch(err => console.error(err))
}


  // Binance

function getBinancePrice() {
  fetch("https://api.binance.us/api/v3/ticker/price")
  .then(response => response.json())
  .then(data => currentBinancePrice = data)
  .then(setTimeout(renderBinancePrice,200))
}

function renderBinancePrice() {
  for (let a = 0; a < tokens.length; a++){
    tokens[a].binanceHtml = ""
    tokens[a].binancesymbol = ""
    tokens[a].binanceprice = ""
    }

    for (let i = 0; i < currentBinancePrice.length; i++) {
      let binancesymbol = currentBinancePrice[i].symbol.substr(0, 4);
      for (let l = 0; l < tokens.length; l++) {
        let tokensSymbol = tokens[l].symbol.toUpperCase()
        if (tokensSymbol === binancesymbol) {
          tokens[l].binancesymbol += currentBinancePrice[i].symbol
          tokens[l].binanceprice += currentBinancePrice[i].price
          tokens[l].binanceHtml += `<div>${currentBinancePrice[i].symbol.substr(0, 4)}-${currentBinancePrice[i].symbol.substr(5)}: $${currentBinancePrice[i].price}</div>`
          document.getElementById(`binance-${tokens[l].symbol}`).innerHTML = tokens[l].binanceHtml
          }}
      binancesymbol = currentBinancePrice[i].symbol.substr(0, 3);
      for (let l = 0; l < tokens.length; l++) {
        let tokensSymbol = tokens[l].symbol.toUpperCase()
        if (tokensSymbol === binancesymbol) {
          tokens[l].binancesymbol += currentBinancePrice[i].symbol
          tokens[l].binanceprice += currentBinancePrice[i].price
          tokens[l].binanceHtml += `<div>${currentBinancePrice[i].symbol.substr(0, 3)}-${currentBinancePrice[i].symbol.substr(4)}: $${currentBinancePrice[i].price}</div>`
          document.getElementById(`binance-${tokens[l].symbol}`).innerHTML = tokens[l].binanceHtml
    } } }
  }


// coinbase

function getCoinbaseData() {
  let ws = new WebSocket('wss://ws-feed.exchange.coinbase.com ');

  ws.onopen = function(){
    //Subscribe to the channel
    ws.send(JSON.stringify({
      "type": "subscribe",
      "product_ids": [
          "BTC-USD"
      ],
      "channels": ["full"],
      "signature": "EllRiZEHs/gl2h6zZjKMh2elLOEQvSoFSDK+wHZashcCjt9EgzTgkPu3cq/m3d4CrMqyOkaNvhZokG1nwIXKbg==",
      "key": "32ad29bfc7427e50e2149f2fdd421bf8",
      "passphrase": "onr59c1ile",
      "timestamp": `${Date.now}`
    }
  ))
  }    
  
  ws.onmessage = function(msg) {
      console.log(JSON.parse(msg.data).message);
  }}

//   const options = {method: 'GET', headers: {Accept: 'application/json'}};

// fetch('https://api.exchange.coinbase.com/products', options)
//   .then(response => response.json())
//   .then(data => currentCoinbaseData = data)
//   .then(getCoinbasePrice)
//   .catch(err => console.error(err));
  

// function getCoinbasePrice() {
//   console.log(Date.now())
//     productId = currentCoinbaseData.map( product => product.id)
//     // let renderCoinBaseHtml = setInterval(coinbasePrice, 360)
//     // coinbasePrice()
// }


function coinbasePrice() {
// key: 65b0bbc016d9a4fe4567bbc685ba8692
// passphrase : 897qo7pa46u
//  API Secret: QahuqncuiPL5wpfyOL3A2Tx2WdsQfk0EdE0tUyGYd/7WaEmjo6u7YGSWRYdc470//tQtO55+D7xidfkRB314/Q==

// "secret": '65b0bbc016d9a4fe4567bbc685ba8692', 'key': "QahuqncuiPL5wpfyOL3A2Tx2WdsQfk0EdE0tUyGYd/7WaEmjo6u7YGSWRYdc470//tQtO55+D7xidfkRB314/Q==", "cb_access_timestamp": `${Date.now()}`,'cb_access_passphrase': '897qo7pa46u'

const options = {method: 'GET', headers: {Accept: 'application/json', secret: '65b0bbc016d9a4fe4567bbc685ba8692', key: "QahuqncuiPL5wpfyOL3A2Tx2WdsQfk0EdE0tUyGYd/7WaEmjo6u7YGSWRYdc470//tQtO55+D7xidfkRB314/Q=="}};

fetch('https://api.exchange.coinbase.com/oracle', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));






  // if (coinbaseCount < productId.length) {
  //   const options = {method: 'GET', headers: {Accept: 'application/json'}};

  // fetch(`https://api.exchange.coinbase.com/products/${productId[coinbaseCount]}/ticker`, options)
  //   .then(response => response.json())
  //   .then(data => currentCoinbasePrice.push(data))
  //   .then(print)
  //   .catch(err => console.error(err));} 
  //   else {
  //     coinbaseCount = 0
  //     clearTimeout(renderCoinBaseHtml)
  //   }coinbaseCount += 1
}


function print() {
  for (let a = 0; a < tokens.length; a++){
    tokens[a].coinbaseHtml = ""
    }
  for (let i = 0; i < productId.length; i++) {
    let coinbaseSymbol = productId[i];
    for (let l = 0; l < tokens.length; l++) {
      console.log(productId[i])
      let tokensSymbol = tokens[l].symbol.toUpperCase()
      coinbaseSymbol = coinbaseSymbol.substr(0, 4)
      // if (tokensSymbol === coinbaseSymbol) {
      //   tokens[l].coinbaseHtml += `<div>${productId[i]}: $${currentCoinbasePrice[i].price}</div>`
      //   document.getElementById(`coinbase-${tokens[l].symbol}`).innerHTML = tokens[l].coinbaseHtml
      //   }
      // coinbaseSymbol = coinbaseSymbol.substr(0, 3)
      // if (tokensSymbol === coinbaseSymbol) {
      //   tokens[l].coinbaseHtml += `<div>${productId[i]}: $${currentCoinbasePrice[i].price}</div>`
      //   document.getElementById(`coinbase-${tokens[l].symbol}`).innerHTML = tokens[l].coinbaseHtml
      //   }
    }
    }}


    //  FTX
// API key: kcOLOV95El-h1ev-rhzGaAJeoxLtvx_HmGTlJj78
// API secret: L-R8NJhrDazxDSPlVrd9cOAiLh4O1T9cHtQyRRCE


function getFTX() {
  const options = {method: 'GET', headers: {'Access-Control-Allow-Origin': "kcOLOV95El-h1ev-rhzGaAJeoxLtvx_HmGTlJj78"}};
  'Access-Control-Allow-Origin'

  fetch('https://ftx.com/api')
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}




























function hideBinance() {
  binance = !binance
  if (binance === false) {
    count -= 1
    document.getElementById("hide-binance").style.backgroundColor = "#404040"
    const boxes = Array.from(document.getElementsByClassName('binance'));
    boxes.forEach(box => {
    box.style.display = 'none';
  });} else {
    count += 1
    document.getElementById("hide-binance").style.backgroundColor = "grey"
    const boxes = Array.from(document.getElementsByClassName('binance'));
    boxes.forEach(box => {
      box.style.display = 'block';
    });}
}

function hideCoinbase() {
  coinbase = !coinbase
  if (coinbase === false) {
    count -= 1
    document.getElementById("hide-coinbase").style.backgroundColor = "#404040"
  const boxes = Array.from(document.getElementsByClassName('coinbase'));
  boxes.forEach(box => {
    box.style.display = 'none';
  });} else {
    count += 1
    document.getElementById("hide-coinbase").style.backgroundColor = "grey"
    const boxes = Array.from(document.getElementsByClassName('coinbase'));
    boxes.forEach(box => {
      box.style.display = 'block';
    });}
}

function hideKucoin() {
  kucoin = !kucoin
  if (kucoin === false) {
    count -= 1
    document.getElementById("hide-kucoin").style.backgroundColor = "#404040"
  const boxes = Array.from(document.getElementsByClassName('kucoin'));
  boxes.forEach(box => {
    box.style.display = 'none';
  });} else {
    count += 1
    document.getElementById("hide-kucoin").style.backgroundColor = "grey"
    const boxes = Array.from(document.getElementsByClassName('kucoin'));
    boxes.forEach(box => {
      box.style.display = 'block';
    });}
}

function hideKraken() {
  kraken = !kraken
  if (kraken === false) {
    count -= 1
    document.getElementById("hide-kraken").style.backgroundColor = "#404040"
  const boxes = Array.from(document.getElementsByClassName('kraken'));
  boxes.forEach(box => {
    box.style.display = 'none';
  });} else {
    count += 1
    document.getElementById("hide-kraken").style.backgroundColor = "grey"
    const boxes = Array.from(document.getElementsByClassName('kraken'));
    boxes.forEach(box => {
      box.style.display = 'block';
    });}
}

function hideGemini() {
  gemini = !gemini
  if (gemini === false) {
    count -= 1
    document.getElementById("hide-gemini").style.backgroundColor = "#404040"
  const boxes = Array.from(document.getElementsByClassName('gemini'));
  boxes.forEach(box => {
    box.style.display = 'none';
  });} else {
    count += 1
    document.getElementById("hide-gemini").style.backgroundColor = "grey"
    const boxes = Array.from(document.getElementsByClassName('gemini'));
    boxes.forEach(box => {
      box.style.display = 'block';
    });}
}

function hideFTX() {
  ftx = !ftx
  if (ftx === false) {
    count -= 1
    document.getElementById("hide-ftx").style.backgroundColor = "#404040"
  const boxes = Array.from(document.getElementsByClassName('ftx'));
  boxes.forEach(box => {
    box.style.display = 'none';
  });} else {
    count += 1
    document.getElementById("hide-ftx").style.backgroundColor = "grey"
    const boxes = Array.from(document.getElementsByClassName('ftx'));
    boxes.forEach(box => {
      box.style.display = 'block';
    });}
}

function hideDefiLlama() {
  defillama = !defillama
  if (defillama === false) {
    count -= 1
    document.getElementById("hide-defillama").style.backgroundColor = "#404040"
  const boxes = Array.from(document.getElementsByClassName('defillama'));
  boxes.forEach(box => {
    box.style.display = 'none';
  });} else {
    count += 1
    document.getElementById("hide-defillama").style.backgroundColor = "grey"
    const boxes = Array.from(document.getElementsByClassName('defillama'));
    boxes.forEach(box => {
      box.style.display = 'block';
    });}
}

function hideTradview() {
  tradeview = !tradeview
  if (tradeview === false) {
    count -= 1
    document.getElementById("hide-tradview").style.backgroundColor = "#404040"
  const boxes = Array.from(document.getElementsByClassName('tradeview'));
  boxes.forEach(box => {
    box.style.display = 'none';
  });} else {
    count += 1
    document.getElementById("hide-tradview").style.backgroundColor = "grey"
    const boxes = Array.from(document.getElementsByClassName('tradeview'));
    boxes.forEach(box => {
      box.style.display = 'block';
    });}
}
