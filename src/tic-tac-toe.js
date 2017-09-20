class TicTacToe {
    constructor() {
        this.currentPlayer = "x";
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
        this.isfinished = false;
        this.winner = null;

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        // выбираю ячейку и ставлю
        if (this.field[rowIndex][columnIndex] !== null) {
            return;
        } 
            this.field[rowIndex][columnIndex] = this.currentPlayer;
        
        

        // проверяю победила ли;
        if (this.field[0][0] === this.currentPlayer 
            && this.field[0][1] === this.currentPlayer 
            && this.field[0][2] === this.currentPlayer ) {
            this.isfinished = true ;
            this.winner = this.currentPlayer;
        } 
        if (this.field[1][0] === this.currentPlayer 
            && this.field[1][1] === this.currentPlayer 
            && this.field[1][2] === this.currentPlayer ) {
            this.isfinished = true ;
            this.winner = this.currentPlayer;
        } 
        if (this.field[2][0] === this.currentPlayer 
            && this.field[2][1] === this.currentPlayer 
            && this.field[2][2] === this.currentPlayer ) {
            this.isfinished = true ;
            this.winner = this.currentPlayer;
        } 
        if (this.field[0][0] === this.currentPlayer 
            && this.field[1][0] === this.currentPlayer 
            && this.field[2][0] === this.currentPlayer ) {
            this.isfinished = true ;
            this.winner = this.currentPlayer;
        } 
        if (this.field[0][1] === this.currentPlayer 
            && this.field[1][1] === this.currentPlayer 
            && this.field[2][1] === this.currentPlayer ) {
            this.isfinished = true ;
            this.winner = this.currentPlayer;
        } 
        if (this.field[0][2] === this.currentPlayer 
            && this.field[1][2] === this.currentPlayer 
            && this.field[2][2] === this.currentPlayer ) {
            this.isfinished = true ;
            this.winner = this.currentPlayer;
        } 
        if (this.field[0][0] === this.currentPlayer 
            && this.field[1][1] === this.currentPlayer 
            && this.field[2][2] === this.currentPlayer ) {
            this.isfinished = true ;
            this.winner = this.currentPlayer;
        } 
        if (this.field[0][2] === this.currentPlayer 
            && this.field[1][1] === this.currentPlayer 
            && this.field[2][0] === this.currentPlayer ) {
            this.isfinished = true ;
            this.winner = this.currentPlayer;
        } 



        // закончена игра или нет;
        if (this.winner !== null) {
            this.isfinished = true;
        }

        var isAnyCell = false;

        for (var row = 0; row < this.field.length; row++) {
            for (var col = 0; col < this.field[row].length; col++ ) {
                if(this.field[row][col] === null){
                    isAnyCell = true;
                }
            }
        }


        if (isAnyCell === false) {
            this.isfinished = true;
        }



        // переход к другому игроку;
        if (this.currentPlayer === "x") {
            this.currentPlayer = "o";
        } else {
            this.currentPlayer = "x";
        }

    }

    isFinished() {
        return this.isfinished;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        var isAnyCell = false;

        for (var row = 0; row < this.field.length; row++) {
            for (var col = 0; col < this.field[row].length; col++ ) {
                if(this.field[row][col] === null){
                    isAnyCell = true;
                }
            }
        }

        return !isAnyCell;
    }

    isDraw() {
        return this.isfinished && !this.winner;

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
