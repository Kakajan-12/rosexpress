import ImgTours from "/public/images/tours.png?jsx";
import ImgLine2 from "/public/images/line2.svg?jsx";
import ImgLine1 from "/public/images/line1.svg?jsx";
import ImgLine3 from "/public/images/line3.svg?jsx";
import ImgLine2 from "/public/images/line2.svg?jsx";
import ImgLine1 from "/public/images/line1.svg?jsx";
import { component$, useSignal } from "@builder.io/qwik";
import styles from "./third.module.css";
import { Modal, ModalContent } from "@qwik-ui/headless";

export default component$(() => {
  const showSig = useSignal(false);
  return (
    <section class={styles.third}>
      <div class={styles.third__container}>
        <h2 class={styles.third__header}>
          <span>Мебельные туры</span> в Фошань под ключ
        </h2>
        <p class={styles.third__text}>
          Предоставляем <span>полный спектр услуг</span> и несём полную
          ответственность на каждом этапе:
        </p>

        <div class={styles.third__body}>
          <div class={styles.third__contents}>
            <div class={styles.content}>
              <div class={styles.content__header}>
                <div class={styles.content__blue}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1_208)">
                      <circle cx="25" cy="25" r="5" fill="#17868D" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_208"
                        x="0"
                        y="0"
                        width="50"
                        height="50"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.12625 0 0 0 0 0.799227 0 0 0 0 0.841667 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_208"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_208"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p class={styles.content__number}>01</p>
              </div>
              <p class={styles.content__main_text}>Организация поездки</p>
              <p class={styles.content__text}>
                От оформления визы до бронирования гостиницы
              </p>
              <div class={styles.content__line}>
                <ImgLine1 />
              </div>
            </div>
            <div class={styles.content}>
              <div class={styles.content__header}>
                <div class={styles.content__blue}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1_208)">
                      <circle cx="25" cy="25" r="5" fill="#17868D" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_208"
                        x="0"
                        y="0"
                        width="50"
                        height="50"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.12625 0 0 0 0 0.799227 0 0 0 0 0.841667 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_208"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_208"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p class={styles.content__number}>02</p>
              </div>
              <p class={styles.content__main_text}>Контроль качества</p>
              <p class={styles.content__text}>
                Не просто оформляем, а выполняем тщательную проверку: на складе
                производителя и перед отправкой. Предоставляем вам видео и
                фотоотчёт перед отправкой
              </p>
              <div class={styles.content__line}>
                <ImgLine2 />
              </div>
            </div>
            <div class={styles.content}>
              <div class={styles.content__header}>
                <div class={styles.content__blue}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1_208)">
                      <circle cx="25" cy="25" r="5" fill="#17868D" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_208"
                        x="0"
                        y="0"
                        width="50"
                        height="50"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.12625 0 0 0 0 0.799227 0 0 0 0 0.841667 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_208"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_208"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p class={styles.content__number}>03</p>
              </div>
              <p class={styles.content__main_text}>Оформление документов</p>
              <p class={styles.content__text}>
                Готовим все сопроводительные бумаги, выполняем растаможивание и
                доставляем товары прямо до вашей двери
              </p>
              <div class={styles.content__line}>
                <ImgLine3 />
              </div>
            </div>
          </div>
          <div class={styles.third__contents}>
            <div class={styles.content__center}></div>
            <div class={styles.content__center_line}>
              <div class={styles.content__center_img}>
                <ImgTours />
              </div>
            </div>
          </div>
          <div class={styles.third__contents}>
            <div class={styles.content}>
              <div class={styles.content__header}>
                <div class={styles.content__blue}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1_208)">
                      <circle cx="25" cy="25" r="5" fill="#17868D" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_208"
                        x="0"
                        y="0"
                        width="50"
                        height="50"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.12625 0 0 0 0 0.799227 0 0 0 0 0.841667 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_208"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_208"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p class={styles.content__number}>04</p>
              </div>
              <p class={styles.content__main_text}>Транспортировка</p>
              <p class={styles.content__text}>
                Перевозим собственной ТК. Гарантируем, что все будет доставлено
                без повреждений
              </p>
              <div class={styles.content__line}>
                <ImgLine1 />
              </div>
            </div>
            <div class={styles.content}>
              <div class={styles.content__header}>
                <div class={styles.content__blue}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1_208)">
                      <circle cx="25" cy="25" r="5" fill="#17868D" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_208"
                        x="0"
                        y="0"
                        width="50"
                        height="50"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.12625 0 0 0 0 0.799227 0 0 0 0 0.841667 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_208"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_208"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p class={styles.content__number}>05</p>
              </div>
              <p class={styles.content__main_text}>
                Персональный менеджер-переводчик
              </p>
              <p class={styles.content__text}>
                Более 10 лет опыта индивидуального подбора мебели
              </p>
              <div class={styles.content__line}>
                <ImgLine2 />
              </div>
            </div>
            <div class={styles.content__button}>
              <div class={styles.content__button_wrapper}>
                <button onClick$={() => (showSig.value = true)}>
                  забронировать тур
                </button>
              </div>
            </div>
            <Modal
              bind:show={showSig}
              class="my-animation shadow-dark-medium bg-background text-foreground rounded-md p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100"
            >
              <ModalContent class="mb-2 pb-4 pt-2">
                {showSig.value ? (
                  <iframe
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/CJar4el-SrE?si=ou0QLG4LJsH_cK6a"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
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
