import { Config } from "./interfaces/Config";
import { querySelector } from "./misc";

type onChangeCallback = (newConfig: Config) => void;

export class Command {
  callback: onChangeCallback = () => {};
  config: Config = {
    multiplicatorFactor: 0,
    samples: 0,
  };

  constructor() {
    this.render();
  }

  onChange(callback: onChangeCallback) {
    this.callback = callback;
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }

  render() {
    const keys = Object.keys(this.config) as (keyof Config)[];
    for (const key of keys) {
      const valueElement = querySelector(`div.command .${key} .value`);
      valueElement.innerHTML = this.config[key] + "";

      const sliderElement = querySelector(
        `div.command .${key} input`
      ) as HTMLInputElement;
      sliderElement.value = this.config[key] + "";
    }
  }
}
