// Code Keypad Component Here
import React from 'react'

function Keypad() {
    function type() {
        console.log("Entering password...")
    }
    return (
        <input onChange={type} type="password" />
    )
}

export default Keypad