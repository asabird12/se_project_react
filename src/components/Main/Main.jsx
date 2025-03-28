import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { DefaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick }) {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          {" "}
          {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {DefaultClothingItems.filter((item) => {
            return item.weather === weatherData.type;
          }).map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
