import React from 'react'
import './components.css'

export const Toast = ({mes, show}) => {
    { return show ? <div className="toastBox"> {mes} </div> : ''}
    
}

export default Toast
