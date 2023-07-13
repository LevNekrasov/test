/* eslint-disable no-undef */
import healthScale from '../health';

const dataList = [
  ['error', { name: 'Олег', health: -10 }, 'error'],
  ['healthy', { name: 'маг', health: 90 }, 'healthy'],
  ['wounded', { name: 'лучник', health: 40 }, 'wounded'],
  ['critical', { name: 'танк', health: 10 }, 'critical'],
];

const handler = test.each(dataList);

handler('testing healthy', (status, amount, expected) => {
  const result = healthScale(amount);
  expect(result).toBe(expected);
});
