import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api/people/";

async function fetchCharacter() {
  try {
    const { data } = await axios.get("/");
    return data;
  } catch (error) {
    return error;
  }
}

const operation = {
  fetchCharacter,
};

export default operation;
