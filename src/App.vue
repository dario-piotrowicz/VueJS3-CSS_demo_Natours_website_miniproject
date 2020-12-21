<template>
  <section-intro></section-intro>
  <section-about></section-about>
  <section-features></section-features>
  <section-tours></section-tours>
  <section-testimonials></section-testimonials>
</template>

<script>
import "./assets/fonts/fonts.css";
import SectionIntro from "./components/sections/Intro";
import SectionAbout from "./components/sections/About";
import SectionFeatures from "./components/sections/Features";
import SectionTours from "./components/sections/Tours";
import SectionTestimonials from './components/sections/Testimonials';

export default {
  name: "App",
  components: {
    "section-intro": SectionIntro,
    "section-about": SectionAbout,
    "section-features": SectionFeatures,
    "section-tours": SectionTours,
    "section-testimonials": SectionTestimonials
  },
};
</script>

<style lang="scss">
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/grid.scss';
@import 'src/assets/styles/utils/containers.scss';
@import 'src/assets/styles/utils/text.scss';

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: $color-medium-gray;
    padding: 3rem;
    box-sizing: border-box;
  }
}

</style>