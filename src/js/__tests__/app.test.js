import characterStatus from '../app';

test('healthy', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };

  expect(characterStatus(character)).toBe('healthy');
});

test('wounded', () => {
  const character = {
    name: 'Маг',
    health: 45,
  };

  expect(characterStatus(character)).toBe('wounded');
});

test('critical', () => {
  const character = {
    name: 'Маг',
    health: 8,
  };

  expect(characterStatus(character)).toBe('critical');
});

test('Wrong character', () => {
  const character = [1, 2, 3, 4];

  expect(characterStatus(character)).toBe('');
});