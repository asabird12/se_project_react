import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="itemCard">
      <h2 className="itemCard__title">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="itemCard__card"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
