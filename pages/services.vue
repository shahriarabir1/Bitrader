<template>
    <section class="service padding-top padding-bottom">
      <div class="section-header section-header--max50">
        <h2 class="mb-15 mt-minus-5"><span>services </span>We offer</h2>
        <p>We offer the best services around - from installations to repairs, maintenance, and more!</p>
      </div>
      <div class="container">
        <div class="service__wrapper">
          <div class="row g-4 align-items-center">
            <div v-for="service in services" :key="service.id" class="col-sm-6 col-md-6 col-lg-4">
              <div class="service__item service__item--style1" data-aos="fade-up" :data-aos-duration="service.animationDuration">
                <div class="service__item-inner text-center">
                  <div class="service__item-thumb mb-30">
                    <img class="dark" :src="service.image" :alt="service.alt" />
                  </div>
                  <div class="service-content">
                    <h5 class="mb-15"><nuxt-link :to="service.link">{{ service.title }}</nuxt-link></h5>
                    <p class="mb-0">{{ service.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      id: 1,
      title: 'Strategy Consulting',
      link: 'service-details',
      image: '/images/service/1.png',
      alt: 'service-icon',
      description: "A social assistant that's flexible can accommodate your schedule and needs, making life easier.",
      animationDuration: 800,
    },
    {
      id: 2,
      title: 'Financial Advisory',
      link: 'service-details',
      image: '/images/service/2.png',
      alt: 'service-icon',
      description: 'Modules transform smart trading by automating processes and improving decision-making.',
      animationDuration: 1000,
    },
    // Add more services as needed
  ];
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  