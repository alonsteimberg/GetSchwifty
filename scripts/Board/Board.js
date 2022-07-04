export default class Board {
    constructor(size) {
        if (this.constructor == Board) {
            throw new Error("cant create instance of this class");
        }
        this.size = size;
        this.board = new Array(size ** 2);
        this.initBoard();
        this.shuffleVaildBoard();
    }

    shuffleVaildBoard() {
        this.shuffle();
        while (!this.validateBoard()) {
            this.shuffle();
        }
    }

    shuffle() {
        for (let i = this.board.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.board[i], this.board[j]] = [this.board[j], this.board[i]];
        }
    }

    validateBoard() {
        let counter = 0;

        for (let i = 0; i < this.board.length; i++) {
            for (let j = i + 1; j < this.board.length; j++) {
                if (this.board[i].id > this.board[j].id && this.board[i].id != this.board.length - 1) {
                    console.log(i + "asdas" + j);
                    counter++;
                }
            }
        }

        if (parseInt(this.size) % 2 == 0) {
            for (let i = 0; i < this.board.length; i++) {
                if (typeof this.board[i].id == this.board.length - 1) {
                    counter += Math.floor(i / this.size) + 1;
                }
            }
        }
        console.log(counter);
        return counter % 2 == 0;
    }

    initBoard() {
        throw new Error("abstract method has no implementation");
    }
}