export default class BoardController {
    constructor(board, view) {
        this.board = board;
        this.view = view;
    }

    play() {
        this.view.createTable(this);
    }

    onClick(position) {
        let success = this.trySwitch(position);
        if (success || success === 0) {
            this.view.updateUi(position, success, this.board.board);
            if (this.checkWin()) {
                this.view.onWin();
            }
        }
    }

    trySwitch(position) {
        let startIndex = Math.floor(position / this.board.size) * this.board.size;
        let row = this.board.board.slice(startIndex, startIndex + parseInt(this.board.size));
        let relativeIndex = position % this.board.size;
        position = parseInt(position);

        if (row[relativeIndex + 1] && row[relativeIndex + 1].id == this.board.board.length - 1) {
            this.#switch(position, position + 1);
            return position + 1;
        } else if (row[relativeIndex - 1] && row[relativeIndex - 1].id == this.board.board.length - 1) {
            this.#switch(position, position - 1);
            return position - 1;
        } else if (this.board.board[position - this.board.size] && this.board.board[position - this.board.size].id == this.board.board.length - 1) {
            this.#switch(position, position - this.board.size);
            return position - this.board.size;
        } else if (this.board.board[position + parseInt(this.board.size)] && this.board.board[position + parseInt(this.board.size)].id == this.board.board.length - 1) {
            this.#switch(position, position + parseInt(this.board.size));
            return position + parseInt(this.board.size);
        }
        return false;
    }

    #switch(position, position1) {
        let tmp = this.board.board[position];
        this.board.board[position] = this.board.board[position1];
        this.board.board[position1] = tmp;
    }

    checkWin() {
        for (let i = 0; i < this.board.board.length - 1; i++) {
            if (this.board.board[i].id != i) {
                return false;
            }
        }
        return true;
    }
}