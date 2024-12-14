/**
 * Shuffles an array in-place using the Fisher-Yates shuffle algorithm.
 *
 * @param {Array} array - The array to shuffle
 * @return {Array} The shuffled array
 */
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Fills an array with enough undefined values to reach a length of 25.
 *
 * @param {Array} [array=[]] - The array to fill
 * @return {Array} The filled array
 */
export const fillRemaining = (array = []) => {
  const length = array.length;
  if (length >= 25) return array;
  return [...array, ...Array(25 - length)];
};

/**
 * Takes an array of strings and converts it into an array of objects with
 * the keys "value" and "selected". The array is shuffled and the first 25
 * items are selected. The "selected" key is set to false.
 *
 * @param {Array<string>} data - The array of strings
 * @return {Array<{value: string, selected: boolean}>} The array of objects
 */
export const getItems = (data) => {
  return shuffle(fillRemaining(data))
    .splice(0, 25)
    .map((item) => ({ value: item, selected: false, bingo: false }));
};

/**
 * Converts a 1D index to 2D coordinates.
 *
 * @param {number} index - The 1D index
 * @return {Array<number, number>} The 2D coordinates [x, y]
 */
export const indexToCoordinates = (index) => {
  return [
    index % 5,
    Math.floor(index / 5),
  ];
}

/**
 * Converts 2D coordinates to a 1D index.
 *
 * @param {number} x - The x-coordinate
 * @param {number} y - The y-coordinate
 * @return {number} The 1D index
 */
export const coordinatesToIndex = (x, y) => {
  return x + 5 * y;
}

export const isLeftToRight = (index) => index % 6 === 0
export const isRightToLeft = (index) => index >= 4 && index <= 20 && index % 4 === 0
