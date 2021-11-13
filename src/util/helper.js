export const getRandomNumbers = (max, length) => {
  let result = [];

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * max);
    if (result.includes(random)) {
      i--;
      continue;
    } else {
      result.push(random);
    }
  }

  return result;
};
