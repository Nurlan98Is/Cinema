import { Header } from "../components/Header";
import style from "./Subscribe.module.css";
import { useState } from "react";

interface Active {
  activeComponent: boolean;
  activeBtn: boolean;
}

export const SubscribePage = () => {
  const [isActive, setActive] = useState<Active>({
    activeComponent: true,
    activeBtn: true,
  });

  const setActiveTrue = (): void =>
    setActive({ activeComponent: true, activeBtn: true });
  const setActiveFasle = (): void =>
    setActive({ activeComponent: false, activeBtn: false });

  return (
    <div>
      <Header />
      <div className={style.subscribe_conteiner}>
        <p className={style.text_first}>Выберете вариант подписки</p>
        <p className={style.text_second}>
          Сменить план подписки или ее отменить можно в любое время
        </p>
        <div className={style.btn_selector_plans}>
          <button
            onClick={setActiveTrue}
            className={`${style.sub_btn} ${
              isActive.activeBtn ? style.sub_btn_active : style.sub_btn_noactive
            }`}
          >
            Базовая подписка
          </button>
          <button
            onClick={setActiveFasle}
            className={`${style.sub_btn} ${
              !isActive.activeBtn
                ? style.sub_btn_active
                : style.sub_btn_noactive
            }`}
          >
            Пакет/Выгода
          </button>
        </div>
        <div>
          {isActive.activeComponent ? (
            <SelecBasePlanSubscribeComponent />
          ) : (
            <SelecBudlePlanSubscribeComponent />
          )}
        </div>
      </div>
    </div>
  );
};

const SelecBasePlanSubscribeComponent = () => {
  return (
    <div className={style.plan_card_container}>
      <section className={style.section_plan_container}>
        <div className={style.first_card_container}>
          <h3>Название приложения (без рекламы)</h3>
          <div className={style.first_plan}>
            <div className={style.first_price_container}>
              <span>Р690</span>
              <span> / месяц</span>
            </div>
          </div>
          <div className={style.description}>
            <p>
              Наш план Hulu (без рекламы) позволяет вам смотреть эксклюзивные
              сериалы, популярные фильмы, оригинальные фильмы, детские шоу и
              многое другое без перерывов на рекламу.
            </p>
          </div>
          <div className={style.first_btn_container}>
            <button>ВЫБРАТЬ</button>
          </div>
        </div>
        <div className={style.second_card_container}>
          <div className={style.second_title_container}>
            <span>Популярное</span>
          </div>
          <h3>Название приложения</h3>
          <div className={style.second_plan}>
            <span>Первый месяц бесплатно, затем</span>
            <div className={style.second_price_container}>
              <span>Р690</span>
              <span> / месяц</span>
            </div>
          </div>
          <div className={style.description}>
            <p>
              Наш план Hulu (с рекламой) позволяет вам смотреть эксклюзивные
              сериалы, популярные фильмы, оригинальные фильмы, детские шоу и
              многое другое.
            </p>
          </div>
          <div className={style.second_btn_container}>
            <button>ВЫБРАТЬ</button>
          </div>
        </div>
        <div className={style.third_card_container}>
          <h3>Название приложения + Live TV</h3>
          <div className={style.third_plan}>
            <span>Первые три дня бесплатно, затем</span>
            <div className={style.third_price_container}>
              <span>Р690</span>
              <span> / месяц</span>
            </div>
          </div>
          <div className={style.description}>
            <p>
              Получите доступ к более чем 95 каналам с Live TV, безлимитным
              видеорегистратором, бесконечным развлечениям с Disney+ (с
              рекламой), прямыми спортивными трансляциями с ESPN+ (с рекламой) и
              отмеченными наградами оригинальными фильмами Hulu с Hulu (с
              рекламой).
            </p>
          </div>
          <div className={style.third_btn_container}>
            <button>ВЫБРАТЬ</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const SelecBudlePlanSubscribeComponent = () => {
  return (
    <div>
      <section>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </section>
    </div>
  );
};
