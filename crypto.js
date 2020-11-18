const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios');
const fs = require('fs');

const url = 'https://coinmarketcap.com/'
setInterval(()=>{
    axios(url).then( (response)=>{
        const data = cheerio.load(response.data);
        const priceData = data('a[href="/currencies/bitcoin/markets/"]')[0].children[0].data;
        console.log(priceData)
        

        return;
        })
        .catch((err)=>{
            console.log(err)
        })
}, 10000)
