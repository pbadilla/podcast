import React, { useState } from 'react'
import {ClipLoader} from "react-spinners";

const Loader = ( message: string ) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

    return loading ? (
        <div className='overlay-content'>
            <div className='wrapper'>
                <ClipLoader
                  size={30}
                  color={color}
                  loading={loading}
                />
                <span className='message'>
                    {message}
                </span>
            </div>
        </div>
    ) : null
};

export default Loader;
