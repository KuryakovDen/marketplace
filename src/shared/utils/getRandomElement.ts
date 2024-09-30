import getRandomNumber from './getRandomNumber.ts'

const getRandomElement = <T>(array: T[]): T => {
  return array[getRandomNumber(0, array.length - 1)];
};

export default getRandomElement;
