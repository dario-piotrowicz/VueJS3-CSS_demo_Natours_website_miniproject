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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  color: #777;
  padding: 3rem;
}
</style>