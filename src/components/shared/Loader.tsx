import React, { useState } from 'react'
import {BounceLoader} from "react-spinners";

const Loader = () => {
  let [color, setColor] = useState("#4c8dc8");

  return (
    <BounceLoader color={color} size={20} />
  )
};

export default Loader;
