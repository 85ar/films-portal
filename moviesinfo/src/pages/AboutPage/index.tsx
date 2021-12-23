import React from "react";
import aboutImg from "assets/img/about.jpg";
import routeMain from "./routes";

import "./styles.scss";

const AboutPage = () => {
  return (
    <section className="mainAbout">
      <div className="container">
        <div className="aboutWrapper about">
          <div className="about__image">
            <img className="about__img" src={aboutImg} alt={aboutImg} />
          </div>
          <div className="about__text">
            <h2 className="about__title">MOVIESinfo</h2>
            <p className="about__description">
              Мы предлагаем вам огромную бибилиотеку фильмов. Здесь вы найдете
              все, что не смогли найти на других сайтах. Только здесь наиболее
              полная коллекция карточек фильмов. Различные жанры, постеры,
              полная информация о фильме.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { routeMain };
export default AboutPage;
