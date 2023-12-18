<template>
  <section class="banner banner--style1">
    <div class="banner__bg">
      <div class="banner__bg-element">
        <Image width="0" height="0" sizes="100vw" style="width: 100%; height: auto;" src="@/images/banner/home1/bg.png"
          alt="section-bg-element" class="dark d-none d-lg-block" />
        <span class="bg-color d-lg-none"></span>
      </div>
    </div>
    <div class="container">
      <div class="banner__wrapper">
        <div class="row gy-5 gx-4">
          <div class="col-lg-6 col-md-7">
            <div class="banner__content" data-aos="fade-right" data-aos-duration="1000">
              <div class="banner__content-coin">
                <img src="@/images/banner/home1/3.png" alt="coin icon" /> <!-- Update the path as needed -->
              </div>
              <h1 class="banner__content-heading">
                Invest your money with <span>higher return</span>
              </h1>
              <p class="banner__content-moto">
                Anyone can invest money in different currencies to increase
                their earnings with the help of Bitrader through online.
              </p>
              <div class="banner__btn-group btn-group">
                <NuxtLink to="signin" class="trk-btn trk-btn--primary trk-btn--arrow">
                  {{ `Get Started ` }}
                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </NuxtLink>

                <NuxtLink @click="toggleToggler" class="trk-btn trk-btn--outline22">
                  <span class="style1">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3C!-- Your SVG path here --%3E%3C/svg%3E"
                      alt="Your SVG Image" />
                  </span>
                  Watch Video
                </NuxtLink>
              </div>

              <div class="banner__content-social">
                <p>Follow Us</p>
                <ul class="social">
                  <li class="social__item">
                    <NuxtLink to="" class="social__link social__link--style1 active">
                      <i class="fab fa-facebook-f"></i>
                    </NuxtLink>
                  </li>
                  <li class="social__item">
                    <NuxtLink to="" class="social__link social__link--style1">
                      <i class="fab fa-linkedin-in"></i>
                    </NuxtLink>
                  </li>
                  <li class="social__item">
                    <NuxtLink to="" class="social__link social__link--style1">
                      <i class="fab fa-instagram"></i>
                    </NuxtLink>
                  </li>
                  <li class="social__item">
                    <NuxtLink to="" class="social__link social__link--style1">
                      <i class="fab fa-youtube"></i>
                    </NuxtLink>
                  </li>
                  <li class="social__item">
                    <NuxtLink to="signin" class="social__link social__link--style1">
                      <i class="fab fa-twitter"></i>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-5">
            <div class="banner__thumb" data-aos="fade-left" data-aos-duration="1000">
              <img src="@/images/banner/home1/1.png" alt="banner-thumb" class="dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner__shape">
      <span class="banner__shape-item banner__shape-item--1">
        <img src="@/images/banner/home1/4.png" alt="shape icon" /> <!-- Update the path as needed -->
      </span>
    </div>
  </section>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const toggler = ref(false);
const router = useRouter();

const toggleToggler = () => {
  toggler.value = !toggler.value;
};

const redirectToSignIn = () => {
  router.push('/signin');
};
</script>
  