import sortLive from '../index';

const arrSort = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const arrTotal = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('тест функции sortLive', () => {
  expect(sortLive(arrSort)).toEqual(arrTotal);
});

test('тест с  .toBe', () => {
  expect(sortLive(arrSort)).toBe(arrTotal);
});
