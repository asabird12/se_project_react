import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <li className="itemCard">
      <h2 className="itemCard__title">{item.name}</h2>
      <img className="itemCard__card" src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;
