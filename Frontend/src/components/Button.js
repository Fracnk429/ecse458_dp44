import React from 'react'
import propTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    
    return (
        <>
            <button 
            style={{ backgroundColor:color}} 
            className='btn'
            onClick={onClick}
            >
                    {text}
            </button>
        </>
    )
}

Button.defaultProps = {
    color: 'black',
    text: 'Add',
    onClick: null

}

Button.propTypes = {
    color: propTypes.string,
    text: propTypes.string,
    onClick: propTypes.func
}

export default Button
