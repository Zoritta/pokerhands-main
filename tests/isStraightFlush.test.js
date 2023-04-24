const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraightFlush returns Truthy if StraightFlush', () => {
  let hand = new Hand('♥9', '♥8', '♥7', '♥5', '♥6');
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('check that isStraightFlush returns Falsy if not StraightFlush', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});

test('check that isStraightFlush returns a higher score for a stronger hand (if two hands but with StraightFlush)', () => {
  let hand1 = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  let hand2 = new Hand('♥9', '♥8', '♥7', '♥5', '♥6');
  let hand1Score = CompareHands.isStraightFlush(hand1);
  let hand2Score = CompareHands.isStraightFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});