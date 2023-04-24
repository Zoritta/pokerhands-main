const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isTwoPair returns Truthy if TwoPair', () => {
  let hand = new Hand('♥8', '♣8', '♥6', '♦6', '♠5');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('check that isTwoPair returns Falsy if not TwoPair', () => {
  let hand = new Hand('♥9', '♦3', '♣7', '♥5', '♦6');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns a higher score for a stronger hand (if two hands but with TwoPair)', () => {
  let hand1 = new Hand('♦9', '♦3', '♣7', '♥5', '♦6');
  let hand2 = new Hand('♥8', '♣8', '♥6', '♦6', '♠5');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

