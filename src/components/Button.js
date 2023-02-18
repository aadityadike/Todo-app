import React from 'react'

const Button = ({ color, onclick, buttonText }) => {
    return (
        <>
            <button className='btn' style={{ backgroundColor: color }} onClick={onclick} >{buttonText}</button>
        </>
    )
}

export default Button