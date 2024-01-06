import { component$, useSignal } from "@builder.io/qwik";
import { Modal, ModalContent } from "@qwik-ui/headless";

// components
import { CloseIcon } from "../close-icon/closeIcon";

// svg
import ImgLight from "/public/images/light.png?jsx";
import ImgArrowLeft1 from "/public/images/arrow-left-1.svg?jsx";
import ImgYoutube1 from "/public/images/youtube1.svg?jsx";
import ImgDivan from "/public/images/divan.png?jsx";
import ImgLamp from "/public/images/lamp.png?jsx";

// styles
import styles from "./hero.module.css";

export default component$(() => {
  const showYoutube = useSignal(false);
  const showSig = useSignal(false);

  return (
    <section class={styles.main}>
      <div class={styles.main__wrapper}>
        <div class={styles.main__lamp}>
          <ImgLamp />
          <ImgLight />
        </div>
        <div class={styles.main__content}>
          <div data-aos="zoom-in" class={styles.main__header}>
            <h1>
              <span>Мебельные туры</span> <br /> с полным сопровождением
            </h1>
            <p>
              <span>Экономия до 500%</span> по сравнению с заказами из Европы и
              РФ
            </p>
          </div>

          <div class={styles.main__content_text}>
            <div
              data-aos="fade-right"
              class={styles.main__youtube}
              onClick$={() => (showYoutube.value = true)}
            >
              <div class={styles.main__youtube_icon}>
                <ImgYoutube1 />
              </div>
              <p>
                <span>Узнайте больше</span> о туре за 1 минуту
              </p>
            </div>
            <Modal
              bind:show={showYoutube}
              class="my-animation shadow-dark-medium bg-background text-foreground rounded-md p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100"
            >
              <ModalContent class="mb-2 pb-4 pt-2">
                {showYoutube.value ? (
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CJar4el-SrE?si=GXP8JRokpY6BZqrc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                ) : (
                  <></>
                )}
              </ModalContent>
              <button
                onClick$={() => (showYoutube.value = false)}
                class="absolute right-2 top-[16px] bg-white text-black p-0"
              >
                <CloseIcon class="h-8 w-8" />
              </button>
            </Modal>
            <div data-aos="zoom-in" class={styles.main__booking}>
              <div class={styles.main__booking_content}>
                <div class={styles.main__booking_btn}>
                  <button onClick$={() => (showSig.value = true)}>
                    забронировать тур
                  </button>
                  <Modal
                    bind:show={showSig}
                    class="my-animation shadow-dark-medium bg-background text-foreground rounded-md p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100"
                  >
                    <ModalContent class="mb-2 pb-4 pt-2">
                      {showSig.value ? (
                        <div class="mt-5">Modal page here</div>
                      ) : (
                        <></>
                      )}
                    </ModalContent>
                    <button
                      onClick$={() => (showSig.value = false)}
                      class="absolute right-2 top-[16px] bg-white text-black p-0"
                    >
                      <CloseIcon class="h-8 w-8" />
                    </button>
                  </Modal>
                </div>
                <p>
                  Выбирайте для себя лучшее. <br /> Отправляйтесь в невероятное
                  мебельное путешествие в Китай с нами!
                </p>
              </div>
              <div class={styles.main__booking_arrow}>
                <ImgArrowLeft1 />
              </div>
            </div>
            <div data-aos="fade-left" class={styles.main__card}>
              <p>
                <span>Собственная ТК</span> <br /> – несём полную
                ответственность
              </p>
              <p>
                <span>Лично убедитесь</span> <br /> в качестве мебели
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class={styles.main__image}>
          <ImgDivan />
        </div>
      </div>
    </section>
  );
});
