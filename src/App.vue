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

body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: #777;
  padding: 30px;
}
</style>