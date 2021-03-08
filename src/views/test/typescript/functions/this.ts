interface Card {
	suit: string;
	card: number;
}
interface Deck {
	suits: string[];
	cards: number[];
	createCardPicker(this: Deck): () => Card;
}
const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  // NOTE: 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정합니다.
  createCardPicker(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();

alert(`card: ${pickedCard.card} of ${pickedCard.suit}`);
