import { useState } from "react"

export const useToggle = (defaultValue) => {
    const [show, setShow] = useState(defaultValue);
    const toggle = () => setShow((prevState) => !prevState);
    return [show, toggle];
}