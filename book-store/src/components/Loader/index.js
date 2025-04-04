import React from "react";
import { ThreeDots } from 'react-loader-spinner'
import './index.css'

const Loader = () => {
   return (
        <div className="loader-container" testid="loader">
            <ThreeDots color="blue" height={32} width={32} />
        </div>
   )
}

export default Loader