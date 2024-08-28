import { useState } from "react";

const useFlip = () => {
    const [flipped, setFlipped] = useState(true);
    const flip = () => setFlipped(flipped => !flipped);
    return [flipped, flip];
}

export default useFlip
