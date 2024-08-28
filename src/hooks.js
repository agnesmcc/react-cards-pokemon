import { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useFlip = () => {
    const [flipped, setFlipped] = useState(true);
    const flip = () => setFlipped(flipped => !flipped);
    return [flipped, flip];
}

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    const addData = async (path = '') => {
        const url = path !== '' ? `${baseUrl}/${path}` : baseUrl;
        const response = await axios.get(`${url}`);
        setData(data => [
            ...data, { ...response.data, id: uuid() }
        ]);
  };
  return [data, addData];
}

export { useFlip, useAxios };
