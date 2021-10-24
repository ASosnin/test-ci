import { getIndicatorName } from '../app';

test('Проверка получения имени индикатора персонажа healthy', () => {
  const received = getIndicatorName({ name: 'Маг', health: 80 });
  expect(received).toBe('healthy');
});

test('Проверка получения имени индикатора персонажа wounded', () => {
  const received = getIndicatorName({ name: 'Маг', health: 50 });
  expect(received).toBe('wounded');
});

test('Проверка получения имени индикатора персонажа critical', () => {
  const received = getIndicatorName({ name: 'Маг', health: 5 });
  expect(received).toBe('critical');
});
