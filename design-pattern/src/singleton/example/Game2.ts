import { IGame } from "./IGame";
import { LeaderBoard } from "./Leaderboard";

export default class Game2 implements IGame{
    leaderBoard: LeaderBoard

    constructor(){
        this.leaderBoard = new LeaderBoard()
    }
    addWinner(position: number, name: string): void {
        this.leaderBoard.addWinner(position, name);
    }
}