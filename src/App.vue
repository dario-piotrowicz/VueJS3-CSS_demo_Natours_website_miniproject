<template>
  <section-intro></section-intro>
</template>

<script>
import "./assets/fonts/fonts.css";
import SectionIntro from "./components/sections/Intro";

export default {
  name: "App",
  components: {
    "section-intro": SectionIntro,
  },
};
</script>

<style lang="scss">
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/grid.scss';

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