//import { FC } from "react"
import style from "./Homepage.module.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={style.homepage_container}>
      <div className={style.subscribe_container}>
        <div className={style.subscribe_month}>
          <p className={style.font_sub}>Купить подписку:</p>
          <p className={style.font_sub}>690р в месяц</p>
          <Link to="/subscribe" className={style.btn_sub}>
            Купить
          </Link>
        </div>
        <div className={style.subscribe_year}>
          <p className={style.font_sub}>Купить годовую подписку:</p>
          <p className={style.font_sub}>415 рублей в месяц</p>
          <Link to="/subscribe" className={style.btn_sub}>
            Купить
          </Link>
        </div>
      </div>
      <p style={{ paddingLeft: "2%", fontSize: "64px" }}>
        Смотри сериалы от FX{" "}
      </p>
      <div className={style.Fx_container}>
        <div className={style.American_crime_story_container}>
          <p className={style.font_fimls_name}>
            Американская история преступлений
          </p>
          <p className={style.font_fimls_genre}>
            Драма, Криминал, Биография, История
          </p>
          <button className={style.btn_more_details}>Подробнее</button>
        </div>

        <div className={style.Snowfall_container}>
          <p className={style.font_fimls_name}>Снегопад</p>
          <p className={style.font_fimls_genre}>Драма, Криминал</p>
          <button className={style.btn_more_details}>Подробнее</button>
        </div>

        <div className={style.What_we_do_in_the_shadow_container}>
          <p className={style.font_fimls_name}>Чем мы заняты в тени</p>
          <p className={style.font_fimls_genre}>Комедия, Ужасы</p>
          <button className={style.btn_more_details}>Подробнее</button>
        </div>

        <div className={style.Sons_of_anarchy_container}>
          <p className={style.font_fimls_name}>Сыны Анархии</p>
          <p className={style.font_fimls_genre}>Триллер, Драма, Криминал</p>
          <button className={style.btn_more_details}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};
