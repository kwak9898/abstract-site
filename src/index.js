class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board) {
        this.boards.push(board);
    }
}

class Board { }

class Article { }

class Comment { }

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
