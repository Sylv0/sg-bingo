export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
};

export const fillRemaining = (array = []) => {
  const length = array.length;
  if (length >= 25) return array;
  return [...array, ...Array(25 - length)];
};

export const getItems = (data) => {
  return shuffle(fillRemaining(data))
    .splice(0, 25)
    .map((item) => ({ value: item, selected: false }));
};
