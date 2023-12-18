import Swal from "sweetalert2";

const options = {
  reverseButtons: true,
  confirmButtonText: "confirmText",
  cancelButtonText: "cancelText",
  confirmButtonColor: "#84bd00",
};

const $swal = {
  install: (Vue, options) => {
    Vue.provide("$swal", Swal.mixin(options));
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use($swal, options);
});
