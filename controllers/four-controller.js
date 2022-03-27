const axios = require('axios')

const countries = async (req, res, next) => {
    hasil = []
    try {
        await axios.get('https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json')
        .then(response => {
            response.data.map((n,i) => {
                country = {
                    name : n.name,
                    region : n.region,
                    timezones : n.timezones
                }
                hasil.push(country)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
    res.json({
        data: hasil
    })
}

exports.countries = countries