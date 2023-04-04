export const $ = <T extends Element>(
  cssSelector: string,
  type?: new () => T
): T => {
  const result = document.querySelector(cssSelector);
  if (result === null) {
    throw new Error(`Cannot find selector ${cssSelector}`);
  }
  if (type && !(result instanceof type)) {
    throw new Error(
      `Found the selector ${cssSelector} but it is not of type ${type}`
    );
  }
  return result as T;
};

export const setAttribute = (
  elt: Element,
  name: string,
  value: number
): void => {
  elt.setAttributeNS(null, name, value + "");
};

export const getKeys = <T extends object>(object: T) => {
  return Object.keys(object) as (keyof T)[];
};

export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
