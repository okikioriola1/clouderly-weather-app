import React from 'react'

import {CgArrowLongLeft} from 'react-icons/cg'

import './GoBack.css'

const GoBack = ({onClick}) => {
    return (
        <>
        <div className="go-back" onClick={onClick}>
                <CgArrowLongLeft className="go-back-arrow"/>
                <p className="go-back-text"> Go Back</p>
                </div>
            
            
        </>
    )
}

export default GoBack
