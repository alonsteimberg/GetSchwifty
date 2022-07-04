import Board from "./Board.js" 
import Cell from "../Cell/cell.js"

export default class NumericBoard extends Board{
    constructor(size){
        super(size)
    }

    initBoard(){
        let maxIndex = this.board.length - 1
        for (let i = 0; i <  maxIndex; i++) {
            this.board[i] =  new Cell(i, i + 1);
        }                             
        this.board[maxIndex] = new Cell(maxIndex, "")
    }
}