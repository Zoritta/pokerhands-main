const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isHighestCard returns Truthy if HighestCard', () => {
  let hand = new Hand('♥10', '♣8', '♥6', '♦3', '♠K');
  expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});


test('check that isHighestCard returns a higher score for a stronger hand (if two hands but with HighestCard)', () => {
  let hand1 = new Hand('♥3', '♦3', '♣7', '♥5', '♦9');
  let hand2 = new Hand('♥10', '♣8', '♥6', '♦3', '♠K');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

