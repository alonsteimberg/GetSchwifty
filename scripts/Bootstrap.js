import BoardController from "./BoardController/boardController.js";
import HtmlView from "../views/htmlView.js"
import NumericBoard from "./Board/numericBoard.js";

export default function GetController() {
    let view = new HtmlView();
    let board = new NumericBoard(view.getLength());
    let controller = new BoardController(board, view);
    return controller;
}