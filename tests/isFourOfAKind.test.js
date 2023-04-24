const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that fourOfAKind returns truthy if four of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('Test that FourOfAKind returns falsy if not three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣9', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('check that fourOfAKind returns a higher score for a stronger hand (if two hands but with ThreeOfAkind)', () => {
  let hand1 = new Hand('♥7', '♦2', '♣9', '♠3', '♠7');
  let hand2 = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});