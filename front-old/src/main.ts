import {
  cx0,
  cy0,
  r0,
  multiplicatorFactor,
  samples,
  svgns,
} from "./constants.js";

console.log("hello world");

const gSamplesElements = document.querySelector("svg g.samples");
if (gSamplesElements === null) {
  throw new Error("Cannot find selector svg g.samples");
}

for (let i = 0; i < samples; i++) {
  const angle = (i * 2 * Math.PI) / samples;
  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);
  const r = 1;

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx.toString());
  circle.setAttributeNS(null, "cy", cy.toString());
  circle.setAttributeNS(null, "r", r.toString());
  gSamplesElements.appendChild(circle);
}

const gLineElement = document.querySelector("svg g.lines");
if (gLineElement === null) {
  throw new Error("Cannot find selector svg g.lines");
}

for (let i = 0; i < samples; i++) {
  const angle1 = (i * 2 * Math.PI) / samples;
  const angle2 = angle1 * multiplicatorFactor;

  const x1 = cx0 + r0 * Math.cos(angle1);
  const y1 = cy0 + r0 * Math.sin(angle1);
  const x2 = cx0 + r0 * Math.cos(angle2);
  const y2 = cy0 + r0 * Math.sin(angle2);

  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", x1.toString());
  line.setAttributeNS(null, "y1", y1.toString());
  line.setAttributeNS(null, "x2", x2.toString());
  line.setAttributeNS(null, "y2", y2.toString());
  gLineElement.appendChild(line);
}
