import axios from "axios";
import Swal from 'sweetalert2'
const urls = "http://localhost:3000";
const getGames = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: urls,
    });

    cb(result.data.games);
  } catch (error) {
    console.log(error);
  }
};

const detailGame = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: urls + "/games/detail/" + id,
    });
    console.log(result.data.getGame)
    cb(result.data.getGame);
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async(user)=> {
  try {
    let result = await axios({
      method: "POST",
      url : urls + "/users/create",
      data : user
    })
    Swal.fire(
      `Add`,
      `lecturer has been added`,
      `success`
    )
  } catch (error) {
    console.log(error)
  }
}




export { getGames, detailGame ,registerUser};
