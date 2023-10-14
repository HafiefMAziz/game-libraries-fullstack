import axios from "axios";

const url = `http://localhost:3000/games`
const getGames = async (cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}`,
        })
        cb(res.data);
    }
    catch (err) {
        console.error(err);
    }
}

const getOneGame = async (gameId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/detail/${gameId}`,
        })
        cb(res.data);
    }
    catch (err) {
        console.error(err);
    }
}

const createGame = async (newGame, cb) => {
    try{
        const res = await axios({
            method: "POST",
            url: `${url}/create`,
            data: newGame
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const deleteGame = async (gameId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/delete/${gameId}`
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const updateGame = async (updatedGame, gameId, cb) => {
    try{
        const res = await axios({
            method: "POST",
            url: `${url}/update/${gameId}`,
            data: updatedGame
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}


export { getGames, getOneGame, createGame, deleteGame, updateGame}