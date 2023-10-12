import axios from "axios";

const url = `http://localhost:3001/genres`
const getGenres = async (cb) => {
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

const createGenre = async (newGenre, cb) => {
    try{
        const res = await axios({
            method: "POST",
            url: `${url}/create`,
            data: newGenre
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const deleteGenre = async (genreId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/delete/${genreId}`
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const getOneGenre = async (genreId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/${genreId}`
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const updateGenre = async (updatedGenre, genreId, cb) => {
    try{
        const res = await axios({
            method: "POST",
            url: `${url}/update/${genreId}`,
            data: updatedGenre
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}


export { getGenres, createGenre, deleteGenre, getOneGenre, updateGenre}