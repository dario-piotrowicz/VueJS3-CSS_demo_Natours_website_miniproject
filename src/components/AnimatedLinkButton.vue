<template>
  <a :href="href" class="btn btn--white"><slot></slot></a>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>

<style scoped>
.btn:link,
.btn:visited {
  font-size: 1.6rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: transform 0.1s, box-shadow 0.1s;
  position: relative;
}

.btn:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 1rem 2rem #00000033;
}

.btn:active {
  transform: translateY(-0.1rem);
  box-shadow: 0 .5rem 1rem #00000033;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: transform 0.4s, opacity 0.4s;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.7);
  opacity: 0;
}

.btn--white {
  color: #777;
  background-color: #fff;
}

.btn--white::after {
  background-color: #fff;
}
</style>
