const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

interface card {
	suit: string,
	card: number
}
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: any): any {
  // 인자가 배열 또는 객체인지 확인
  // 만약 그렇다면, deck이 주어지고 card를 선택합니다.
  if (typeof x === 'object') {
    const pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // 그렇지 않다면 그냥 card를 선택합니다.
  if (typeof x === 'number') {
    const pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
  return null;
}

const myDeck = [{ suit: 'diamonds', card: 2 }, { suit: 'spades', card: 10 }, { suit: 'hearts', card: 4 }];
const pickedCard1 = myDeck[pickCard(myDeck)];
alert(`card: ${pickedCard1.card} of ${pickedCard1.suit}`);

const pickedCard2:card = pickCard(15);
alert(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
