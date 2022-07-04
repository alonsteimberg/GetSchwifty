export default class HtmlView {
    onWin() {
        window.alert("you won, LFG");
    }

    getLength() {
        return window.prompt("pls enter the length you want");
    }

    updateUi(position, position1, board) {
        document.getElementsByTagName("td")[position].innerHTML = board[position].value
        document.getElementsByTagName("td")[position1].innerHTML = board[position1].value
    }

    createTable(controller) {
        let board = controller.board;
        let table = document.createElement('table');
        table.id = "board";
        document.getElementById('main').appendChild(table);
        for (let i = 0; i < board.size; i++) {

            let tr = document.createElement('tr');
            tr.id = `${i + 1}`;
            document.getElementById('board').appendChild(tr);

            for (let j = 0; j < board.size; j++) {
                let td = document.createElement('td');
                td.id = `${j + i * board.size}`;
                td.innerHTML = board.board[j + i * board.size].value;
                td.onclick = function () { controller.onClick(j + i * board.size) };
                tr.appendChild(td);
            }
        }
    }
}

