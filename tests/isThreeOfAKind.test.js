const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy if three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('Test that threeOfAKind returns falsy if not three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣9', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});

test('check that threeOfAKind returns a higher score for a stronger hand (if two hands but with ThreeOfAkind)', () => {
  let hand1 = new Hand('♥7', '♦2', '♣9', '♠3', '♠7');
  let hand2 = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});