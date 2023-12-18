<template>
    <div>
      <div class="lightdark-switch" @click="toggleTheme">
        <span class="switch-btn" id="btnSwitch">
          <nuxt-image ref="themeIcon" width="0" height="0" sizes="100vw"
            :src="theme === 'dark' ? '@/images/icon/sun.svg' : '@/images/icon/moon.svg'" alt="light-dark-switchbtn"
            class="swtich-icon" />
        </span>
      </div>
      <header class="header-section" :class="headerClass ? headerClass : 'bg-color-3'" @scroll="isSticky">
        <div class="header-bottom">
          <div class="container">
            <div class="header-wrapper">
              <div class="logo">
                <NuxtLink to="/">
                  <img class="dark" src='@/images/logo/logo.png' alt="logo" />
                </NuxtLink>
              </div>
  
              <div class="menu-area">
                <ul :class="`menu menu--style1 ${menu ? 'active' : ''}`">
                  <li class="megamenu menu-item-has-children">
                    <NuxtLink scroll="false" to="/#0" @click="toggleActive">Demos</NuxtLink>
  
                    <ul class="submenu">
                      <li>
                        <div class="home-showcase">
                          <div class="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            <div class="col order-first">
                              <div class="home-showcase__item">
                                <div class="home-showcase__image">
                                  <img src="@/images/demo/1.png" alt="home-showcase" />
                                  <div class="home-showcase__buttons">
                                    <NuxtLink :to="{ pathname: '/', query: { theme: 'light' } }"
                                      class="trk-btn trk-btn--primary home-showcase__buttons-item mt-3">
                                      <span>Preview</span>
                                    </NuxtLink>
                                  </div>
                                </div>
                                <h3 class="home-showcase__title">
                                  <NuxtLink :to="{ pathname: '/', query: { theme: 'light' } }">
                                    Stock Tradings
                                  </NuxtLink>
                                </h3>
                              </div>
                            </div>
                            <div class="col">
                              <div class="home-showcase__item">
                                <div class="home-showcase__image">
                                  <img src="@/images/demo/1-dark.png" alt="home-showcase" />
                                  <div class="home-showcase__buttons">
                                    <NuxtLink :to="{ pathname: '/', query: { theme: 'dark' } }"
                                      class="trk-btn trk-btn--primary home-showcase__buttons-item mt-3">
                                      <span>Preview</span>
                                    </NuxtLink>
                                  </div>
                                </div>
                                <h3 class="home-showcase__title">
                                  <NuxtLink :to="{ pathname: '/', query: { theme: 'dark' } }">
                                    Stock Trading Dark
                                  </NuxtLink>
                                </h3>
                              </div>
                            </div>
  
                            <!-- Crypto Trading Light -->
                            <div class="col">
                              <div class="home-showcase__item">
                                <div class="home-showcase__image">
                                  <img src="@/images/demo/2.png" alt="home-showcase" />
                                  <div class="home-showcase__buttons">
                                    <NuxtLink :to="{ pathname: '/index-2', query: { theme: 'light' } }"
                                      class="trk-btn trk-btn--primary home-showcase__buttons-item mt-3">
                                      <span>Preview</span>
                                    </NuxtLink>
                                  </div>
                                </div>
                                <h3 class="home-showcase__title">
                                  <NuxtLink :to="{ pathname: '/index-2', query: { theme: 'light' } }">
                                    Crypto Trading
                                  </NuxtLink>
                                </h3>
                              </div>
                            </div>
  
                            <!-- Crypto Trading Dark -->
                            <div class="col">
                              <div class="home-showcase__item">
                                <div class="home-showcase__image">
                                  <img src="@/images/demo/2-dark.png" alt="home-showcase" />
                                  <div class="home-showcase__buttons">
                                    <NuxtLink :to="{ pathname: '/index-2', query: { theme: 'dark' } }"
                                      class="trk-btn trk-btn--primary home-showcase__buttons-item mt-3">
                                      <span>Preview</span>
                                    </NuxtLink>
                                  </div>
                                </div>
                                <h3 class="home-showcase__title">
                                  <NuxtLink :to="{ pathname: '/index-2', query: { theme: 'dark' } }">
                                    Crypto Trading Dark
                                  </NuxtLink>
                                </h3>
                              </div>
                            </div>
  
                            <!-- Forex Trading Light -->
                            <div class="col">
                              <div class="home-showcase__item">
                                <div class="home-showcase__image">
                                  <img src="@/images/demo/3.png" alt="home-showcase" />
                                  <div class="home-showcase__buttons">
                                    <NuxtLink :to="{ pathname: '/index-3', query: { theme: 'light' } }"
                                      class="trk-btn trk-btn--primary home-showcase__buttons-item mt-3">
                                      <span>Preview</span>
                                    </NuxtLink>
                                  </div>
                                </div>
                                <h3 class="home-showcase__title">
                                  <NuxtLink :to="{ pathname: '/index-3', query: { theme: 'light' } }">
                                    Forex Trading
                                  </NuxtLink>
                                </h3>
                              </div>
                            </div>
  
                            <!-- Forex Trading Dark -->
                            <div class="col">
                              <div class="home-showcase__item">
                                <div class="home-showcase__image">
                                  <img src="@/images/demo/3-dark.png" alt="home-showcase" />
                                  <div class="home-showcase__buttons">
                                    <NuxtLink :to="{ pathname: '/index-3', query: { theme: 'dark' } }"
                                      class="trk-btn trk-btn--primary home-showcase__buttons-item mt-3">
                                      <span>Preview</span>
                                    </NuxtLink>
                                  </div>
                                </div>
                                <h3 class="home-showcase__title">
                                  <NuxtLink :to="{ pathname: '/index-3', query: { theme: 'dark' } }">
                                    Forex Trading Dark
                                  </NuxtLink>
                                </h3>
                              </div>
                            </div>
                            <div class="col order-last">
                              <div class="home-showcase__item">
                                <div class="home-showcase__image">
                                  <img src="@/images/demo/new.png" alt="home-showcase" />
                                </div>
                                <h3 class="home-showcase__title">
                                  <NuxtLink scroll: false to="/#0">New Demos</NuxtLink>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <NuxtLink to="/services" @click="toggleActive">Services</NuxtLink>
                    <ul class="submenu">
                      <li>
                        <NuxtLink to="/services">Services</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/service-details">Services Details</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <NuxtLink scroll="false" to="/#0" @click="toggleActive">About</NuxtLink>
                    <ul class="submenu">
                      <li>
                        <NuxtLink to="/about">About Us</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/price">Price</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/team">Team</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/team-2">Team 2</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/team-details">Team Details</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <NuxtLink scroll="false" to="/#0" @click="toggleActive">Pages</NuxtLink>
                    <ul class="submenu">
                      <li>
                        <NuxtLink to="/blogs">Blogs</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/blog-sidebar">Blog - Side Bar</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/blog-details">Blog Details</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/signup">Sign Up</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/signup-2">Sign Up 2</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/signin">Sign In</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/signin-2">Sign In 2</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/forgot-pass">Reset Password</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/forgot-pass-2">Reset Password 2</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/404">404 Error</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="contact">Contact Us</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="header-action">
                <div class="menu-area">
                  <div class="header-btn">
                    <NuxtLink to="signup" class="trk-btn trk-btn--border trk-btn--primary">
                      <span>Join Now</span>
                    </NuxtLink>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        menu: false,
        show: false,
        scrollTop: 0,
      };
    },
    computed: {
  
      themeIconSrc() {
        return this.themeMode === 'dark' ? 'images/icon/sun.svg' : 'images/icon/moon.svg';
      },
      headerClass() {
        const theme = localStorage.getItem('theme');
        return theme && theme === 'dark' ? 'dark-header' : null;
      },
    },
    methods: {
  
      toggleTheme() {
        const theme = localStorage.getItem('theme');
        this.updateThemeColor(theme && theme === 'dark' ? 'light' : 'dark');
      },
      updateThemeColor(themeMode) {
        const colorSwitcher = document.getElementById('btnSwitch');
        document.documentElement.setAttribute('data-bs-theme', themeMode);
        localStorage.setItem('theme', themeMode);
  
        if (themeMode === 'dark') {
          colorSwitcher.classList.add('dark-switcher');
        } else {
          colorSwitcher.classList.remove('dark-switcher');
        }
  
        this.changeImage(themeMode);
      },
      changeImage(themeMode = 'light') {
        // const icon = this.$refs.themeIcon.$el; // Use the $refs property to get the underlying element
  
        if (themeMode === 'dark') {
          // icon.src = 'images/icon/sun.svg';
          var images = document.querySelectorAll('img.dark');
    
          for (var i = 0; i < images.length; i++) {
              var oldSrc = images[i].src;
              oldSrc = oldSrc.replace("-dark.", ".");
              var oldIndex = oldSrc.lastIndexOf(".");
              var baseName = oldSrc.slice(0, oldIndex);
              var extension = oldSrc.slice(oldIndex);
              var newSrc = baseName + "-dark" + extension;
              images[i].src = newSrc;
          }
  
          // Change the logo source to logo-dark.png
          
        } else {
          // icon.src = '/images/icon/moon.svg';
          const images = document.querySelectorAll('img.dark');
  
          for (const image of images) {
            const oldSrc = image.src;
            const newSrc = oldSrc.replace('-dark.', '.');
            image.src = newSrc;
          }
  
          // Change the logo source to logo.png
          this.$refs.logo.src = '/images/logo/logo.png';
        }
      }
  
      ,
      switchThemeByUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const theme = urlParams.get('theme');
  
        if (theme) {
          localStorage.setItem('theme', theme);
        }
      },
      isSticky() {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250
          ? header.classList.add('header-fixed', 'fadeInUp')
          : header.classList.remove('header-fixed', 'fadeInUp');
      },
      closeAllMenus() {
        const elements = document.querySelectorAll('.menu-item-has-children.open');
  
        for (const item of elements) {
          item.classList.remove('open');
          item.querySelector('.submenu').style.display = 'none';
        }
      },
      toggleMenu() {
        this.menu = !this.menu;
        this.closeAllMenus();
      },
      toggleActive(event) {
        event.preventDefault();
        const mediaQuery = window.matchMedia('(max-width: 991px)');
  
        if (mediaQuery.matches) {
          event.currentTarget.parentElement.classList.toggle('open');
          const submenu = event.currentTarget.nextElementSibling;
          if (!submenu.style.display || submenu.style.display === 'none') {
            submenu.style.display = 'block';
          } else {
            submenu.style.display = 'none';
          }
        }
      },
      toggleMenu() {
        this.menu = !this.menu;
        this.closeAllMenus();
      }
    },
    mounted() {
      this.switchThemeByUrl();
      this.updateThemeColor(localStorage.getItem('theme'));
      this.$router.events.on('routeChangeStart', this.removeActive);
  
      window.addEventListener('scroll', this.isSticky);
  
      return () => {
        this.$router.events.off('routeChangeStart', this.removeActive);
        window.removeEventListener('scroll', this.isSticky);
      };
    },
  };
  </script>
  
  <style scoped>
  /* Your scoped CSS styles */
  </style>