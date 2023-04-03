import { SVGNS } from "./constants";
import { Config } from "./interfaces/Config";
import { querySelector, setAttribute } from "./misc";
import { getAngleFromIndex, getCoordinates } from "./math";

export class Board {
  config: Config = {
    multiplicatorFactor: 23,
    samples: 10,
  };

  clear() {
    querySelector("svg g.samples").innerHTML = "";
    querySelector("svg g.lines").innerHTML = "";
  }

  draw() {
    this.drawSamples();
    this.drawLines();
  }

  drawLines() {
    const gLineElement = querySelector("svg g.lines");

    for (let i = 0; i < this.config.samples; i++) {
      const angle1 = (i * 2 * Math.PI) / this.config.samples;
      const angle2 = angle1 * this.config.multiplicatorFactor;

      const p1 = getCoordinates(angle1);
      const p2 = getCoordinates(angle2);

      const line = document.createElementNS(SVGNS, "line");
      setAttribute(line, "x1", p1.x);
      setAttribute(line, "y1", p1.y);
      setAttribute(line, "x2", p2.x);
      setAttribute(line, "y2", p2.y);
      gLineElement.appendChild(line);
    }
  }

  drawSamples() {
    const gSamplesElements = querySelector("svg g.samples");

    for (let i = 0; i < this.config.samples; i++) {
      // Get angle in radian
      const angle = getAngleFromIndex(i, this.config.samples);

      const point = getCoordinates(angle);
      const r = 1;

      const circle = document.createElementNS(SVGNS, "circle");
      setAttribute(circle, "cx", point.x);
      setAttribute(circle, "cy", point.y);
      setAttribute(circle, "r", r);
      gSamplesElements.appendChild(circle);
    }
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
