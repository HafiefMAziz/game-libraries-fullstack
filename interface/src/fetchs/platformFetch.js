import axios from "axios";

const url = `http://localhost:3001/platforms`
const getPlatforms = async (cb) => {
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

const createPlatform = async (newPlatform, cb) => {
    try{
        const res = await axios({
            method: "POST",
            url: `${url}/create`,
            data: newPlatform
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const deletePlatform = async (platformId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/delete/${platformId}`
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const getOnePlatform = async (platformId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/${platformId}`
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const updatePlatform = async (updatedPlatform, platformId, cb) => {
    try{
        const res = await axios({
            method: "POST",
            url: `${url}/update/${platformId}`,
            data: updatedPlatform
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}


export { getPlatforms, createPlatform, deletePlatform, getOnePlatform, updatePlatform}
