import { defineNuxtPlugin } from "#app";
import "aos/dist/aos.css";
import AOS from "aos";



export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      once: false,
      offset: screen.height / 4.9,
    });
  }
});
