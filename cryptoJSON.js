const request = require('request');

const crypto = () => {
    request('https://coinmarketcap.com/', (error, response, body) => {
        const init = body.indexOf('<tbody>')
        const end = body.indexOf('</tbody>')
        const extractedData = body.substring(init, end)
        const substractedData = extractedData.indexOf('href="/currencies/bitcoin/markets/"')
        const coinData = extractedData.substring(substractedData, substractedData + 80)
        const moneyData = coinData.substring(coinData.indexOf('$') ,coinData.indexOf('</a'))
        console.log(moneyData)
    })
}

setInterval(()=>{
    crypto();
}, 5000)
