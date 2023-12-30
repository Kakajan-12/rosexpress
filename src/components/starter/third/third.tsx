import { component$ } from "@builder.io/qwik";
import styles from "./third.module.css"

export default component$(() => {
    return (
      <div class={styles.third}>
        <div class={["container"]}>
          <h2 class={styles.third__header}>Мебельные туры в Фошань под ключ</h2>
          <p class={styles.third__text}>
            Предоставляем полный спектр услуг и несём полную ответственность на
            каждом этапе:
          </p>

          <div class={styles.third__body}>
            <div class={styles.third__contents}>
              <div class={styles.content}>
                <div class={styles.content__header}>
                  <div class={styles.content__blue}></div>
                  <p class={styles.content__number}>01</p>
                </div>
                <p class={styles.content__main_text}>Организация поездки</p>
                <p class={styles.content__text}>
                  От оформления визы до бронирования гостиницы
                </p>
                <div class={styles.conten__line}>
                  <img src="" />
                </div>
              </div>
              <div class={styles.content}>
                <div class={styles.content__header}>
                  <div class={styles.content__blue}></div>
                  <p class={styles.content__number}>02</p>
                </div>
                <p class={styles.content__main_text}>Контроль качества</p>
                <p class={styles.content__text}>
                  Не просто оформляем, а выполняем тщательную проверку: на
                  складе производителя и перед отправкой. Предоставляем вам
                  видео и фотоотчёт перед отправкой
                </p>
                <div class={styles.conten__line}>
                  <img src="" />
                </div>
              </div>
              <div class={styles.content}>
                <div class={styles.content__header}>
                  <div class={styles.content__blue}></div>
                  <p class={styles.content__number}>03</p>
                </div>
                <p class={styles.content__main_text}>Оформление документов</p>
                <p class={styles.content__text}>
                  Готовим все сопроводительные бумаги, выполняем растаможивание
                  и доставляем товары прямо до вашей двери
                </p>
                <div class={styles.conten__line}>
                  <img src="" />
                </div>
              </div>
            </div>
            <div class={styles.third__contents}>
              <div class={styles.content__center}>
                <div class={styles.content__center_line}>
                  <div class={styles.content__center_img}>
                    <img src="" />
                  </div>
                </div>
              </div>
            </div>
            <div class={styles.third__contents}>
              <div class={styles.content}>
                <div class={styles.content__header}>
                  <div class={styles.content__blue}></div>
                  <p class={styles.content__number}>04</p>
                </div>
                <p class={styles.content__main_text}>Транспортировка</p>
                <p class={styles.content__text}>
                  Перевозим собственной ТК. Гарантируем, что все будет
                  доставлено без повреждений
                </p>
                <div class={styles.conten__line}>
                  <img src="" />
                </div>
              </div>
              <div class={styles.content}>
                <div class={styles.content__header}>
                  <div class={styles.content__blue}></div>
                  <p class={styles.content__number}>05</p>
                </div>
                <p class={styles.content__main_text}>
                  Персональный менеджер-переводчик
                </p>
                <p class={styles.content__text}>
                  Более 10 лет опыта индивидуального подбора мебели
                </p>
                <div class={styles.conten__line}>
                  <img src="" />
                </div>
              </div>
              <div class={styles.content__button}>
                <button>забронировать тур</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
})