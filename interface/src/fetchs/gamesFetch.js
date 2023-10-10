import axios from 'axios'
const urls = "http://localhost:3000/"
const getGames  = async (cb) =>{
    try {
        let result = await axios({
            method : "GET",
            url : urls
        })
       
        cb(result.data.games)
    } catch (error) {
        console.log(error)
    }
}

const latestGames = async (cb) => {
    try {
        let result = await axios({
            method : "GET",
            url : urls
        })
        console.log(result.data.games[0])
        cb(result.data.games[0])
    } catch (error) {
        console.log(error)
    }
}

export {getGames,latestGames}