const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isOnePair returns Truthy if OnePair', () => {
  let hand = new Hand('♥8', '♣8', '♥7', '♦6', '♠5');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('check that isOnePair returns Falsy if not OnePair', () => {
  let hand = new Hand('♥9', '♦3', '♣7', '♥5', '♦6');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('check that isOnePair returns a higher score for a stronger hand (if two hands but with OnePair)', () => {
  let hand1 = new Hand('♦9', '♦3', '♣7', '♥5', '♦6');
  let hand2 = new Hand('♥8', '♣8', '♥7', '♦6', '♠5');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

