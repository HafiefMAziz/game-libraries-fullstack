import axios from "axios";

const url = `http://localhost:3000/publishers`
const getPublishers = async (cb) => {
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

const createPublisher = async (newPublisher, cb) => {
    try{
        const res = await axios({
            method: "POST",
            url: `${url}/create`,
            data: newPublisher
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const deletePublisher = async (publisherId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/delete/${publisherId}`
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const getOnePublisher = async (publisherId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/${publisherId}`
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const updatePublisher = async (updatedPublisher, publisherId, cb) => {
    try{
        const res = await axios({
            method: "POST",
            url: `${url}/update/${publisherId}`,
            data: updatedPublisher
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}


export { getPublishers, createPublisher, deletePublisher, getOnePublisher, updatePublisher}

