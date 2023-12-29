
import ImgLight from '/public/images/light.png?jsx';
import ImgArrowLeft1 from "/public/images/arrow-left-1.svg?jsx";
import ImgYoutube1 from "/public/images/youtube1.svg?jsx";
import ImgDivan from "/public/images/divan.png?jsx";
import ImgLamp from "/public/images/lamp.png?jsx";
import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";

export default component$(() => {
  return (
    <div class={styles.main}>
        <div class={styles.main__wrapper}>
          <div class={styles.main__lamp}>
            <ImgLamp />
            <ImgLight />
          </div>
          <div class={styles.main__content}>
            <div class={styles.main__header}>
              <h1>
                <span>Мебельные туры</span> <br /> с полным сопровождением
              </h1>
              <p>
                <span>Экономия до 500%</span> по сравнению с заказами из Европы
                и РФ
              </p>
            </div>
            <div class={styles.main__content_text}>
              <div class={styles.main__youtube}>
                <div class={styles.main__youtube_icon}>
                  <ImgYoutube1 />
                </div>
                <p>
                  <span>Узнайте больше</span> о туре за 1 минуту
                </p>
              </div>
              <div class={styles.main__booking}>
                <div class={styles.main__booking_content}>
                  <div class={styles.main__booking_btn}>
                    <button>забронировать тур</button>
                  </div>
                  <p>
                    Выбирайте для себя лучшее. <br /> Отправляйтесь в
                    невероятное мебельное путешествие в Китай с нами!
                  </p>
                </div>
                <div class={styles.main__booking_arrow}>
                  <ImgArrowLeft1 />
                </div>
              </div>
              <div class={styles.main__card}>
                <p>
                  <span>Собственная ТК</span> <br/> – несём полную
                  ответственность
                </p>
                <p>
                  <span>Лично убедитесь</span> <br/> в качестве мебели
                </p>
              </div>
            </div>
          </div>
          <div class={styles.main__image}>
            <ImgDivan />
          </div>
        </div>
      </div>
  );
});
