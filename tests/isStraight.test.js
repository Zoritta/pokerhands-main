const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraight returns Truthy if Straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('check that isStraight returns Falsy if not Straight', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});

test('check that isStraight returns a higher score for a stronger hand (if two hands but with Straight)', () => {
  let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
  let hand2 = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});