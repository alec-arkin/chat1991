import axios from "axios";

const messages = async (body, pg, action = () => {}) => {
  let page = pg;
  const response = await axios.get(`http://127.0.0.1:4444/msg/1/${page}`);

  console.log("AXIOS", response.data);

  action((state) => {
    return {
      ...state,
      data: Array.isArray(response.data)
        ? response.data
        : [...state.data, body],
    };
  });
};

export default messages;
