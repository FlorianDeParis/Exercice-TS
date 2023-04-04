import { Config } from "./interfaces/Config";
import { getKeys, querySelector } from "./misc";

type onChangeCallback = (newConfig: Config) => void;

export class Command {
  callback: onChangeCallback = () => {};
  config: Config = {
    multiplicatorFactor: 0,
    samples: 0,
  };

  constructor() {
    this.setAction();
    this.render();
  }
  setAction() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      const sliderElement = querySelector(
        `div.command .${key} input`,
        HTMLInputElement
      );

      sliderElement.addEventListener("input", () => {
        const newValue = Number(sliderElement.value);
        this.config[key] = newValue;
        this.render();
        this.callback(this.config);
      });
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
      const valueElement = querySelector(`div.command .${key} .value`);
      valueElement.innerHTML = this.config[key] + "";

      const sliderElement = querySelector(
        `div.command .${key} input`,
        HTMLInputElement
      );
      sliderElement.value = this.config[key] + "";
    }
  }
}
