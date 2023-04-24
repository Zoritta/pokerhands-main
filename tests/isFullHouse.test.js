const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isFullHouse returns Truthy if FullHouse', () => {
  let hand = new Hand('♥8', '♣8', '♥6', '♦6', '♠6');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('check that isFullHouse returns Falsy if not FullHouse', () => {
  let hand = new Hand('♥9', '♦3', '♣7', '♥5', '♦6');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('check that isFullHouse returns a higher score for a stronger hand (if two hands but with FullHouse)', () => {
  let hand1 = new Hand('♦9', '♦3', '♣7', '♥5', '♦6');
  let hand2 = new Hand('♥8', '♣8', '♥6', '♦6', '♠6');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});