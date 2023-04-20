import { useParams } from "react-router-dom";
import planets from "./planets/planets";
import "../assets/stylesheets/Planet.css";

export default function Planet() {
  const param = useParams();


  function filterPlanet() {
    let filteredPlanet = planets.map((p) => {
      if (p.name.toLowerCase() === param.planet.toLowerCase()) {
        return (
          <div className="planet__container" key={p.name}>
            <div
              className="planet__photo__container"
            >
              <img className="planet__photo" src={p.photo} />
              <div className="planet__photo__text__container">
                <p className="planet__photo__text">{p.bio}</p>
              </div>
            </div>
            <div className="planet__info">
              <p className="planet__name">{p.name}</p>
              <div className="planet__text">
                <p className="planet__text__header">Distance From the Sun: </p>
                {p.distance.toLocaleString()} kilometers
              </div>
              <div className="planet__text">
                <p className="planet__text__header">Diameter: </p>
                {p.diameter.toLocaleString()} kilometers
              </div>
              <div className="planet__text">
                <p className="planet__text__header">Number of Moons: </p>
                {p.moons}
              </div>
              <div className="planet__text">
                <p className="planet__text__header">Length of Day: </p>
                {p.dayLength}
              </div>
              <div className="planet__text">
                <p className="planet__text__header">Length of Year: </p>
                {p.yearLength}
              </div>
            </div>
          </div>
        );
      }
    });

    return filteredPlanet;
  }

  return (
    <>
      <a href="/" className="back__button">
        <i className="bi bi-rocket-takeoff-fill"></i> BACK
      </a>
      {filterPlanet()}
    </>
  );
}
