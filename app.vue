<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

.scrolltop-enter-active,
.scrolltop-leave-active {
  transition: all 0.25s ease-out;
}

.scrolltop-enter-from {
  opacity: 0;
  bottom: 0vh;
}

.scrolltop-leave-to {
  opacity: 0;
  bottom: 0vh;
}
</style>