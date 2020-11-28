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
    </div>
  </section>
</template>

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
  top: 40px;
  left: 40px;
}

.logo {
  height: 35px;
}

.content-wrapper {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.primary-heading {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
}

.primary-heading .main-text {
  display: block;
  font-size: 5rem;
  font-weight: 400;
  letter-spacing: 2rem;
}

.primary-heading .sub-text {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1.15rem;
}
</style>