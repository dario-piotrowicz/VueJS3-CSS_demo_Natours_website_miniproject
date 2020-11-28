<template>
  <section id="intro">
    <div class="logo-container">
      <img src="../../assets/images/logo-white.png" alt="Logo" class="logo" />
    </div>
  </section>
</template>

<style>
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
  top: 40px;
  left: 40px;
}

.logo {
  height: 35px;
}
</style>