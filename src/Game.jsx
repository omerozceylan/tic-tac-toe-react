import { useState } from "react"
import Board from "./Board"

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    return (
        <>
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
        </>
    )
}