import ImgTgWithoutBorder from "/public/images/Tg-without-border.svg?jsx";
import ImgVkWithoutBorder from "/public/images/vk-without-border.svg?jsx";
import ImgBetDivan from "/public/images/bet-divan.png?jsx";
import ImgSimpleDivan from "/public/images/simple-divan.png?jsx";
import { component$ } from "@builder.io/qwik";
import styles from "./second.module.css";

export default component$(() => {
  return (
    <section class={styles.second}>
      <div class={["container"]}>
        <div class={styles.counter}>
          <div class={styles.counter__body}>
            <div class={styles.counter__block}>
              <div class={styles.counter__count}>
                15+
              </div>
              <p class={styles.counter__text}>лет опыта в мебельных турах</p>
            </div>
            <div class={styles.counter__block}>
              <div class={styles.counter__count}>700+</div>
              <p class={styles.counter__text}>доставленных контейнеров</p>
            </div>
            <div class={styles.counter__block}>
              <div class={styles.counter__count}>2+</div>
              <p class={styles.counter__text}>
                млрд руб. сэкономили клиентам на покупке мебели
              </p>
            </div>
            <div class={styles.counter__block}>
              <div class={styles.counter__count}>15</div>
              <p class={styles.counter__text}>опытных сотрудников в России</p>
            </div>
            <div class={styles.counter__block}>
              <div class={styles.counter__count}>10</div>
              <p class={styles.counter__text}>штатных сотрудников в Китае</p>
            </div>
          </div>
        </div>
        <div class={["container"]}>
          <div class={styles.second__wrapper}>
            <h2 class={styles.second__header}>
              <span>95% магазинов</span> заказывают мебель из Китая и не только
              в России, но весь остальной мир!
            </h2>
            <div class={styles.second__body}>
              <div class={styles.second__content_black}>
                <h3>
                  Онлайн покупка мебели из РФ, <br /> Европы и Китая
                </h3>
                <div class={styles.second__content_list}>
                  <ul>
                    <li>
                      Ограниченный выбор на сайтах. Большинство фабрик РФ
                      предлагает 5-10 стандартных однообразных моделей.
                    </li>
                    <li>
                      Нельзя оценить заранее качество изделий и материалов.
                    </li>
                    <li>
                      Большой риск получить мебель, не соответствующую
                      ожиданиям.
                    </li>
                    <li>
                      Приходится слепо доверять отзывам о производителе или
                      посреднике.
                    </li>
                    <li>
                      Необходимо заказывать мебель, сантехнику и свет из разных
                      магазинов и переплачивать за доставку.
                    </li>
                    <li>
                      Известные и надежные европейские бренды на сегодняшний
                      день недоступны к прямому заказу из РФ.
                    </li>
                    <li>
                      Переплата от 30 до 60% если вы покупаете у дистрибьютора,
                      а не у производителя напрямую.
                    </li>
                  </ul>
                </div>
                <ImgSimpleDivan />
              </div>
              <div class={styles.second__content_white}>
                <h3>
                  Мебельный тур в Китай с <br /> РосЭкспресс
                </h3>
                <div class={styles.second__content_list}>
                  <ul>
                    <li>
                      Прямой доступ к фабрикам-производителям и тысячам
                      вариантов качественной мебели.
                    </li>
                    <li>
                      Доступ к эксклюзивным коллекциям мебели, не выставленным
                      на продажу онлайн.
                    </li>
                    <li>
                      Вы лично удостоверитесь в высоком качестве: оцените
                      материалы и рассмотрите каждую деталь.
                    </li>
                    <li>
                      Проверите мебель в реальных условиях. Сможете сесть на
                      стулья, раскрыть ящики комода, разложить диван.
                    </li>
                    <li>
                      Купите в ходе тура всё необходимое для комплектации
                      интерьера под ключ.
                    </li>
                    <li>
                      Погрузитесь в атмосферу, традиции и уникальную культуру
                      Китая.
                    </li>
                    <li>
                      Покупка напрямую от фабрики = экономия в 2-5 раз. Без
                      посредников и скрытых расходов. Чем больше объём мебели в
                      вашем заказе, тем больше ваша выгода!
                    </li>
                  </ul>
                </div>
                <ImgBetDivan />
              </div>
              <div class={styles.second__link}>
                <div class={styles.second__link_text}>
                  <p>Нужна помощь специалиста? Задайте свой вопрос</p>
                </div>
                <div class={styles.second__link_items}>
                  <div class={styles.second__link_item}>
                    <ImgTgWithoutBorder />
                  </div>
                  <div class={styles.second__link_item}>
                    <ImgVkWithoutBorder />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
