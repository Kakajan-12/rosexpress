import { component$ } from "@builder.io/qwik";
import styles from "./second.module.css";

export default component$(() => {
    return (
      <div class={styles.second}>
        <div class={["container"]}>
          <div class={styles.counter}>
            <div class={styles.counter__body}>
              <div class={styles.counter__block}>
                <div class={styles.counter__count}>15+</div>
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
                <p class={styles.counter__text}>
                  штатных сотрудников в Китае
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
})