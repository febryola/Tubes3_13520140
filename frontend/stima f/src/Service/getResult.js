import axios from "../Axios";

const getResult = async (query) => {
    const result = await axios.post(`result`, { query });
    return result;
    }
export default getResult;