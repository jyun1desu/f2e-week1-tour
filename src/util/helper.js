export const getRandomNumbers = (max, length, expel = []) => {
  let result = [];

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * max);
    if (result.includes(random) || expel.includes(random)) {
      i--;
      continue;
    } else {
      result.push(random);
    }
  }

  return result;
};
