import "./style.css";
import { Board } from "./Board";
import { Config } from "./interfaces/Config";

const board = new Board();
const config: Config = {
  samples: 10,
  multiplicatorFactor: 4,
};
board.setConfig(config);
board.clear();
board.draw();
