<template>
  <section id="intro">
    <div class="logo-container">
      <img src="../../assets/images/logo-white.png" alt="Logo" class="logo" />
    </div>
    <div class="content-wrapper">
      <h1 class="primary-heading">
        <span class="main-text">Outdoors</span>
        <span class="sub-text">is where life happens</span>
      </h1>
      <animated-link-button href="#" class="animated-link-button"
        >Discover our tours</animated-link-button
      >
    </div>
  </section>
</template>

<script>
import AnimatedLinkButton from "../AnimatedLinkButton";
export default {
  components: {
    "animated-link-button": AnimatedLinkButton,
  },
};
</script>

<style scoped>
#intro {
  height: 95vh;
  position: relative;
  background-image: linear-gradient(to bottom right, #7ed56fc9, #28b485c9),
    url("../../assets/images/intro-bg.jpg");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}

.logo-container {
  position: absolute;
  top: 4rem;
  left: 4rem;
}

.logo {
  height: 3.5rem;
}

.content-wrapper {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.primary-heading {
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 6rem;
}

.primary-heading .main-text {
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.5rem;
  animation: primary-heading-main-text-animation 1s ease-out;
}

.primary-heading .sub-text {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.5rem;
  animation: primary-heading-sub-text-animation 1s ease-out;
}

.animated-link-button {
  animation: animated-link-button-animation 0.5s ease-out 0.75s backwards;
}

@keyframes primary-heading-main-text-animation {
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

@keyframes primary-heading-sub-text-animation {
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

@keyframes animated-link-button-animation {
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