import axios from "../Axios";

const postTest = async (pengguna,ill,dna) => {
    const result = await axios.post(`test`, {pengguna, ill, dna});
    return result;
    }
export default postTest;