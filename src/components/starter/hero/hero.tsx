import ImgLamp from "/public/images/lamp.png?jsx";
import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";

export default component$(() => {
  return (
    <div class={styles.main}>
      <div class={["container"]}>
        <div class={styles.main__wrapper}>
          <div class={styles.main__lamp}>
            <ImgLamp />
          </div>
          <div class={styles.main__content}>
            
          </div>
        </div>
      </div>
    </div>
  );
});
