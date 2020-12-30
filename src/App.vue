<template>
  <app-navigation></app-navigation>
  <main>
    <section-intro></section-intro>
    <section-about></section-about>
    <section-features></section-features>
    <section-tours></section-tours>
    <section-testimonials></section-testimonials>
    <section-booking></section-booking>
  </main>
  <app-footer></app-footer>
</template>

<script>
import "./assets/fonts/fonts.css";
import "./assets/linea-icons/styles.css";
import Navigation from "./components/Navigation";
import SectionIntro from "./components/sections/Intro";
import SectionAbout from "./components/sections/About";
import SectionFeatures from "./components/sections/Features";
import SectionTours from "./components/sections/Tours";
import SectionTestimonials from './components/sections/Testimonials';
import SectionBooking from './components/sections/Booking';
import Footer from './components/Footer';

export default {
  name: "App",
  components: {
    "app-navigation": Navigation,
    "section-intro": SectionIntro,
    "section-about": SectionAbout,
    "section-features": SectionFeatures,
    "section-tours": SectionTours,
    "section-testimonials": SectionTestimonials,
    "section-booking": SectionBooking,
    "app-footer": Footer,
  },
};
</script>

<style lang="scss">
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/grid.scss';
@import 'src/assets/styles/utils/containers.scss';
@import 'src/assets/styles/utils/text.scss';
@import 'src/assets/styles/utils/media-queries.scss';

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;

  @include natours-mq(big-desktop) {
    font-size: 75%;
  }
  @include natours-mq(tablet-landscape) {
    font-size: 56.25%;
  }
  @include natours-mq(tablet-portrait) {
    font-size: 50%;
  }
  @include natours-mq(phone) {
    font-size: 45%;
  }

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: $color-medium-gray;
    padding: 3rem;
    box-sizing: border-box;
    min-width: 330px;

    @include natours-mq(tablet-portrait) {
      padding: 0;
    }
  }
}

</style>