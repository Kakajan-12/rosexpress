import ImgTg from "/public/images/Tg.svg?jsx";
import ImgVk from "/public/images/vk.svg?jsx";
import ImgYou from "/public/images/you.svg?jsx";
import ImgLogo from "/public/images/logo.png?jsx";
import { component$, useSignal } from "@builder.io/qwik";
import styles from "./header.module.css";
import Hamburger from "hamburger-qwik";

export default component$(() => {
  const isOpen = useSignal(false);

  return (
    <header class={styles.header}>
      <div class={["container"]}>
        <div class={styles.header__wrapper}>
          <div class={styles.header__logo}>
            <ImgLogo class={styles.header__logo_img} alt="logo" />
            <p class={styles.header__logo_text}>
              Индивидуальные мебельные туры в Китай для частных клиентов и
              бизнеса
            </p>
            <div class={styles.header__burger}>
              <Hamburger toggle={isOpen} />
            </div>
          </div>

          <div
            class={
              isOpen.value
                ? styles.header__contact
                : styles.header__contact_disable
            }
          >
            <div class={styles.header__mail}>
              <p class={styles.header__mail_text}>E-mail:</p>
              <a class={styles.header__mail_link} href="#">
                rosexpress-msk@yandex.ru
              </a>
            </div>
            <div class={styles.header__social_links}>
              <a class={styles.header__social_link} href="#">
                <ImgYou class={styles.header__social_icon} />
              </a>
              <a class={styles.header__social_link} href="#">
                <ImgTg class={styles.header__social_icon} />
              </a>
              <a class={styles.header__social_link} href="#">
                <ImgVk class={styles.header__social_icon} />
              </a>
            </div>
            <div class={styles.header__call}>
              <a class={styles.header__number} href="tel:8 (800) 333-89-01">
                8 (800) 333-89-01
              </a>
              <a href="#" class={styles.header__back_call}>
                Обратный звонок
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
