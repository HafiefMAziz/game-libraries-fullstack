import axios from "axios";
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
    // console.log(result.data.getGame)
    cb(result.data.getGame);
  } catch (error) {
    console.log(error);
  }
};

export { getGames, detailGame };
