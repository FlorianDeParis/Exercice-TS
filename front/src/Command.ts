import { Config } from "./interfaces/Config";
import { getKeys, $, sleep } from "./misc";

type onChangeCallback = (newConfig: Config) => void;

const step = 0.01;

export class Command {
  callback: onChangeCallback = () => {};
  config: Config = {
    multiplicatorFactor: 0,
    samples: 0,
  };
  isPlaying = false;

  constructor() {
    this.setAction();
    this.render();
  }
  setAction() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      const sliderElement = $(`div.command .${key} input`, HTMLInputElement);

      sliderElement.addEventListener("input", () => {
        const newValue = Number(sliderElement.value);
        this.config[key] = newValue;
        this.render();
        this.callback(this.config);
      });
    }

    const buttonElt = $("div.command button.play");
    buttonElt.addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.play();
      }
    });

    const buttonRandomElt = $("div.command button.random");
    buttonRandomElt.addEventListener("click", () => {
      console.log("click random");
    });
  }
  async play() {
    while (this.isPlaying) {
      await sleep(500);
      let mf = this.config.multiplicatorFactor;
      mf = +((mf + step) % 100).toFixed(2);
      this.config.multiplicatorFactor = mf;
      this.render();
      this.callback(this.config);
    }
  }

  onChange(callback: onChangeCallback) {
    this.callback = callback;
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }

  render() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      const valueElement = $(`div.command .${key} .value`);
      valueElement.innerHTML = this.config[key] + "";

      const sliderElement = $(`div.command .${key} input`, HTMLInputElement);
      sliderElement.value = this.config[key] + "";
    }

    const buttonElt = $("div.command button.play");
    buttonElt.innerHTML = this.isPlaying ? "Arrêter" : "Démarrer";
  }
}
