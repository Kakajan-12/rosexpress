import ImgLight from "/public/images/light.png?jsx";
import ImgArrowLeft1 from "/public/images/arrow-left-1.svg?jsx";
import ImgYoutube1 from "/public/images/youtube1.svg?jsx";
import ImgDivan from "/public/images/divan.png?jsx";
import ImgLamp from "/public/images/lamp.png?jsx";
import { component$, useSignal, QwikIntrinsicElements } from "@builder.io/qwik";
import styles from "./hero.module.css";
import {
  Modal,
  ModalContent,
} from "@qwik-ui/headless";

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

export function CloseIcon(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.9-2.9Zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}
