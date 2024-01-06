import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/starter/hero/hero";
import Second from "~/components/starter/second/second";
import Third from "~/components/starter/third/third";

export default component$(() => {
  return (
    <>
      <Hero />
      <Second />
      <Third />
    </>
  );
});

export const head: DocumentHead = {
  title: "RosExpress",
  links: [
    {
      rel: "icon",
      href: "./public/images/logo.png",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.metroui.org.ua/current/metro.css",
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/aos@next/dist/aos.css",
    },
  ],
};
