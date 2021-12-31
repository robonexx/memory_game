import './SingleCard.css';

// challenge was to create the component and then add it to the project. had an other css but then copied Shauns

export default function SingleCard({ card }) {
  return (
    <div className='card'>
      <div>
        <img src={card.src} className='front' alt='card front' />
        <img src='/img/cover.png' className='back' alt='card back' />
      </div>
    </div>
  );
}
