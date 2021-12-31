import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    // make an array with 2 of the cardImages array with help of spread operator
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      // mapping the cards and setting a unique id with math random
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);
  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      {/* creating the grid for the cards and mapping them */}
      <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
