import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title,notice,onAdd,showAdd}) => {
    return (
        <div>
            <div className='header'>
                <h1>Reservation System</h1>
                <Button
                    text={showAdd ? 'Close' : 'Add Resource'}
                    onClick={onAdd}
                    color={showAdd ? 'Grey' : 'Black'}
                />
            </div>
            <h3>{title}</h3>
            <p>{notice}</p>
        </div>
    )
}

Header.defaultProps = {
    title: '',
    notice: ''
}

Header.propTypes = {
    title: propTypes.string,
    notice: propTypes.string
}

export default Header
