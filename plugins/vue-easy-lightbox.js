import vueEasyLightbox from "vue-easy-lightbox";


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vueEasyLightbox);
});
