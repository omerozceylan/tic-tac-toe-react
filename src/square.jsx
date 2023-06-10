import { useState } from "react"

export default function Square({value, onSquareClick}) {

        // console.log('value of square: '+value)
        return (
            <>
                <button 
                className="square"
                onClick={onSquareClick}
                >{value}</button>
            </>
        )


}
