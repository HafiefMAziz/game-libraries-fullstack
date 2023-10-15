import axios from "axios";

const url = `http://localhost:3000/users`
const getUsers = async (cb) => {
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

const createUser = async (newUser, cb) => {
    try{
        console.log(newUser);
        const res = await axios({
            method: "POST",
            url: `${url}/create`,
            data: newUser
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const deleteUser = async (userId, cb) => {
    try{
        const res = await axios({
            method: "DELETE",
            url: `${url}/delete/${userId}`
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}

const getOneUser = async (userId, cb) => {
    try{
        const res = await axios({
            method: "GET",
            url: `${url}/${userId}`,
        })
        cb(res.data);
    }
    catch (err) {
        console.error(err);
    }
}

const updateUser = async (updatedUser, userId, cb) => {
    try{
        const res = await axios({
            method: "PUT",
            url: `${url}/update/${userId}`,
            data: updatedUser
        })
        cb(res.data);
    }
    catch(err) {
        console.error(err);
    }
}


export { getUsers, createUser, deleteUser, getOneUser, updateUser}

