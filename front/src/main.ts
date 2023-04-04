import "./style.scss";
import { Board } from "./Board";
import { Config } from "./interfaces/Config";

const board = new Board();
const config: Config = {
  samples: 10,
  multiplicatorFactor: 5,
};
board.setConfig(config);
board.clear();
board.draw();
