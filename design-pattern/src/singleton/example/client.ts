import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";

const g1 = new Game1()
g1.addWinner(2,"Jabir");

const g2 = new Game2();
g2.addWinner(4, "Rakib")

const g3 = new Game3()
g3.addWinner(5, "Sohan")

// To be a Singleton, there must only be one copy of the Singleton, no matter how many times, or in which class it was instantiated.
g1.leaderBoard.print()
g2.leaderBoard.print()
g3.leaderBoard.print()

