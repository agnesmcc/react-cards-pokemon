import { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useFlip = () => {
    const [flipped, setFlipped] = useState(true);
    const flip = () => setFlipped(flipped => !flipped);
    return [flipped, flip];
}

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const addCard = async () => {
        const response = await axios.get(`${url}`);
        setData(data => [
            ...data, { ...response.data, id: uuid() }
        ]);
  };
  return [data, addCard];
}

export { useFlip, useAxios };
