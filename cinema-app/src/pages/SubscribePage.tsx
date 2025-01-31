import { Header } from "../components/Header";
import style from "./Subscribe.module.css";

export const SubscribePage = () => {
  return (
    <div>
      <Header />
      <div className={style.subscribe_conteiner}>
        <p className={style.text_first}>Выберете вариант подписки</p>
        <p className={style.text_second}>
          Сменить план подписки или ее отменить можно в любое время
        </p>
        <div className={style.btn_container}>
          <div>
            <button>Базовая подписка</button>
            <button>Пакет/Выгода</button>
          </div>
          <div>
            <SelecBasePlanSubscribeComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

const SelecBasePlanSubscribeComponent = () => {
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
