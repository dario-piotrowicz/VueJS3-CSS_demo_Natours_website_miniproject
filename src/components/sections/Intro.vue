<template>
  <section class="intro">
    <div class="intro__logo-container">
      <img src="../../assets/images/logo-white.png" alt="Logo" class="intro__logo" />
    </div>
    <div class="intro__content-wrapper">
      <h1 class="intro__primary-heading">
        <span class="intro__primary-main-text">Outdoors</span>
        <span class="intro__primary-sub-text">is where life happens</span>
      </h1>
      <animated-link-or-button href="#" class="animated-link-or-button">
        Discover our tours
      </animated-link-or-button>
    </div>
  </section>
</template>

<script>
import AnimatedLinkOrButton from "../AnimatedLinkOrButton";
export default {
  components: {
    "animated-link-or-button": AnimatedLinkOrButton,
  },
};
</script>

<style lang='scss' scoped>
@import 'src/assets/styles/constants/colors.scss';

.intro {
  $bg-colors-transparent-amount: .3;
  $bg-color-top-left : transparentize($color-primary-lighter, $bg-colors-transparent-amount);
  $bg-color-bottom-right: transparentize($color-primary-darker, $bg-colors-transparent-amount);

  height: 95vh;
  position: relative;
  background-image: linear-gradient(to bottom right, $bg-color-top-left, $bg-color-bottom-right),
    url("../../assets/images/intro-bg.jpg");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);

  &__logo-container {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  &__logo {
    height: 3.5rem;
  }

  &__content-wrapper {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  &__primary- {
    &heading {
      color: $color-white;
      text-transform: uppercase;
      margin-bottom: 6rem;
    }

    &main-text {
      display: block;
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 3.5rem;
      animation: intro__primary-heading-main-text-animation 1s ease-out;
    }

    &sub-text {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1.5rem;
      animation: intro__primary-heading-sub-text-animation 1s ease-out;
    }
  }

}


.animated-link-button {
  animation: intro__animated-link-button-animation .5s ease-out .75s backwards;
}

@keyframes intro__primary-heading-main-text-animation {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes intro__primary-heading-sub-text-animation {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes intro__animated-link-button-animation {
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>